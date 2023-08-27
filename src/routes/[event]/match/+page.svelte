<script lang="ts">
    import { goto } from '$app/navigation';

    import { personMatchPeople, personMatchProjects } from '$lib/algorithm/match';
    import { convertEvent } from '$lib/db/event';

    import { getEventProject } from '$lib/db/eventProject';
    import { getUser } from '$lib/db/user.js';
    import { userAuth } from '$lib/stores/userAuth';
    import { onDestroy, onMount } from 'svelte';

    import { doc, onSnapshot } from "firebase/firestore";
    import { db } from '$lib/firebase';

    import UserCard from '$lib/components/UserCard.svelte';

    export let data;

    let eventUpdated: MatchaEvent = data.event;

    let projectMatches: [EventProject, number][] = [];
    let peopleMatches: [MatchaUser, number][] = [];


    const unsub = onSnapshot(doc(db, "events", eventUpdated.id), async (doc) => {
        eventUpdated = convertEvent(doc);

        console.log(eventUpdated);

        const allPeoplePromise: Promise<MatchaUser>[] = [];

        for (const attendee of eventUpdated.attendees) {
            if (attendee !== $userAuth.id) {
                allPeoplePromise.push(getUser(attendee));
            }
        }

        const allPeople = await Promise.all(allPeoplePromise);

        const allProjectPromise: Promise<EventProject>[] = [];
        
        for (const project of eventUpdated.projects) {
            allProjectPromise.push(getEventProject(project));
        }

        const allProjects = await Promise.all(allProjectPromise);

        console.log($userAuth);
        console.log(allPeople);
        console.log(allProjects);

        peopleMatches = await personMatchPeople($userAuth, allPeople)
        peopleMatches.reverse()

        // {user: 0.6, user2: 0.4}

        projectMatches = await personMatchProjects($userAuth, allProjects);
        projectMatches.reverse()

        console.log(peopleMatches);
        console.log(projectMatches);
    });

    onDestroy(() => unsub());

    async function gotoProject(projectID: string) {
        await goto(`/${eventUpdated.id}/project/${projectID}/join`);
    }
</script>

{#if eventUpdated.name !== ""}
    <div class='calling border'>
        <h1 class='cas-size6-reg'>{eventUpdated.name}</h1>
        <div class='line'></div>
        <p class='hal-size2-reg'>{eventUpdated.description}</p>
    </div>
    <div class='stats'>
        <div class='green stat border'>
            {eventUpdated.attendees.length} people joined
        </div>
        <div class='brown stat border'>
            {eventUpdated.date}
        </div>
    </div>
    {:else}

    <h1>eventUpdated not found</h1>
{/if}



{#if eventUpdated.category === "Project Mode"}
    <div class='announcement cas-size3-reg'>Your suggested projects</div>
    <div class='matches'>
        {#each projectMatches as eventProject}
            <UserCard name={eventProject[0].name} description={eventProject[0].description} score={eventProject[1]}
                action={"Join"} />
        {/each}
    </div>
    
{:else}
        <div class='announcement cas-size3-reg'>Look through the suggested projects</div>
        <div class='matches'>
            {#each peopleMatches as people}
                <UserCard name={people[0].name} description={people[0].email} score={people[1]} 
                    action={"Invite"}/>
                <button>
                    <label for="invite">Invite</label>
                    <input type="checkbox" id="invite"/>
                </button>
            {/each}
        </div>
{/if}


<style>
    .calling {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem;
    }

    .line {
        width: 30%;
        height: 1px;
        background-color: var(--black);
    }
    
    .border {
        border: 0.5px solid var(--black);
    }
    
    .button {
        background-color: var(--white);
        height: 6rem;
        width: 40vw;
    }

    .members {
        display: flex;
        justify-content: space-around;
    }
    .member {
        padding: 20px;
        margin: 20px;
        text-align: center;
    }

    .stats {
        display: flex;
        justify-content: space-around;
    }
    .stat {
        padding: 20px;
        width: 50%;
        text-align: center;
    }

    .announcement {
        padding: 20px;
        text-align: center;
        margin-top: 5px;
    }

    .matches {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
