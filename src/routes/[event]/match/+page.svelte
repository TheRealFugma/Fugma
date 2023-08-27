<script lang="ts">
    import { goto } from '$app/navigation';

    import { personMatchPeople, personMatchProjects } from '$lib/algorithm/match';
    import { convertEvent } from '$lib/db/event.js';

    import { getEventProject } from '$lib/db/eventProject';
    import { getUser } from '$lib/db/user.js';
    import { userAuth } from '$lib/stores/userAuth';
    import { onDestroy, onMount } from 'svelte';

    import { doc, onSnapshot } from "firebase/firestore";
    import { db } from '$lib/firebase';

    export let data;

    const event: MatchaEvent = data.event;

    let projectMatches: [EventProject, number][] = [];
    let peopleMatches: [MatchaUser, number][] = [];


    const unsub = onSnapshot(doc(db, "events", event.id), async (doc) => {
        const eventUpdated = convertEvent(doc);

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

        peopleMatches = personMatchPeople($userAuth, allPeople).reverse();

        // {user: 0.6, user2: 0.4}

        projectMatches = personMatchProjects($userAuth, allProjects).reverse();

        console.log(peopleMatches);
        console.log(projectMatches);
    });

    onDestroy(() => unsub());

    async function gotoProject(projectID: string) {
        await goto(`/${event.id}/project/${projectID}/join`);
    }
</script>

{#if event.name !== ""}
    <div class='calling border'>
        <h1 class='cas-size6-reg'>{event.name}</h1>
        <div class='line'></div>
        <p class='hal-size2-reg'>{event.description}</p>
    </div>
    <div class='stats'>
        <div class='green stat border'>
            {event.attendees.length} people joined
        </div>
        <div class='brown stat border'>
            {event.date}
        </div>
    </div>
    <div class='calling border'>
        <h2 class='cas-size3-reg'>Your suggested group members</h2>
            <div class='members'>
                <div class='green member border'>
                    {event.attendees.length} people joined
                </div>
                <div class='brown member border'>
                    {event.date}
                </div>
                <div class='grey member border'>
                    {event.date}
                </div>
            </div>
    </div>

    {:else}

    <h1>Event not found</h1>
{/if}



{#if event.category === "Project Mode"}
    {#each projectMatches as eventProject}
        {eventProject[0].name}
        <br/>

        {eventProject[0].description}
        {#each eventProject[0].skills as skill}
            {skill}
            <br/>
        {/each}

        Similarity: {eventProject[1]}

        <button class="btn variant-filled" on:click={async () => await gotoProject(eventProject[0].id)}>View Project</button>

        <br/>
    {/each}
    
{:else}
    {#each peopleMatches as user}
        {user[0].name}
        <!-- {user.description} -->
        {#each user[0].traits as trait}
            {trait}
            <br/>

        {/each}

        {#each user[0].answers as answer}
            {answer}
            <br/>

        {/each}

        Similarity: {user[1]}

        <label for="invite">Invite</label>
        <input type="checkbox" id="invite"/>

        <br/>
    {/each}    
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
</style>
