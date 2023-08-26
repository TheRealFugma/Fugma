<script lang="ts">
    import { goto } from '$app/navigation';

    import { personMatchPeople, personMatchProjects } from '$lib/algorithm/match';
    import { convertEvent, getEvent } from '$lib/db/event.js';

    import { getEventProject } from '$lib/db/eventProject';
    import { getUser } from '$lib/db/user.js';
    import { userAuth } from '$lib/stores/userAuth';
    import { onDestroy, onMount } from 'svelte';

    import { doc, onSnapshot } from "firebase/firestore";
    import { db } from '$lib/firebase';

    export let data;

    const event: MatchaEvent = data.event;

    let projectMatches: EventProject[] = [];
    let peopleMatches: MatchaUser[] = [];


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

        peopleMatches = personMatchPeople($userAuth, allPeople);

        projectMatches = personMatchProjects($userAuth, allProjects);

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
        {eventProject.name}
        {eventProject.description}
        {#each eventProject.skills as skill}
            {skill}
        {/each}

        <button class="btn variant-filled" on:click={async () => await gotoProject(eventProject.id)}>View Project</button>
    {/each}
    
{:else}
    {#each peopleMatches as user}
        {user.name}
        <!-- {user.description} -->
        {#each user.traits as trait}
            {trait}
        {/each}

        {#each user.answers as answer}
            {answer}
        {/each}

        <label for="invite">Invite</label>
        <input type="checkbox" id="invite"/>
    {/each}    
{/if}