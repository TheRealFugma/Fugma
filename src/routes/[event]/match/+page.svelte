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

<h1>Explore</h1>

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