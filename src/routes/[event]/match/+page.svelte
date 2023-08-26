<script lang="ts">
    import { goto } from '$app/navigation';
    import { getEventProject } from '$lib/db/eventProject.js';
    import { onMount } from 'svelte';

    export let data;

    const event: MatchaEvent = data.event;

    let projectMatches: EventProject[] = [];
    let peopleMatches: MatchaUser[] = [];

    onMount(async () => {
        projectMatches.push(await getEventProject("MNpHoou3dtxNtCj6XDjo"));
        projectMatches = projectMatches
    });

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
    {/each}
    
    <button class="btn variant-filled" on:click={async () => await gotoProject(eventProject.id)}>View Project</button>
{:else}
    <label for="invite">Invite</label>
    <input type="checkbox" id="invite"/>
{/if}