<script lang="ts">
    import { goto } from '$app/navigation';
  import { getEventProject } from '$lib/db/eventProject.js';
  import { onMount } from 'svelte';

    export let data;

    const event = data.event;

    let matches: EventProject[] = [];

    onMount(async () => {
        matches.push(await getEventProject("MNpHoou3dtxNtCj6XDjo"));
        matches = matches
    });

    async function gotoProject(projectID: string) {
        await goto(`/${event.id}/project/${projectID}/join`);
    }
</script>

<h1>Explore</h1>

{#each matches as eventProject}
    {eventProject.name}
    {eventProject.description}
    {#each eventProject.skills as skill}
        {skill}
    {/each}
    <button class="btn variant-filled" on:click={async () => await gotoProject(eventProject.id)}>View Project</button>
{/each}