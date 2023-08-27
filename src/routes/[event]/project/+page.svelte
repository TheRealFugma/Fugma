<script>
    import { createProject } from '$lib/db/eventProject';
    import { goto } from '$app/navigation';

    import { page } from '$app/stores';

    export let data;
    const event = data.event;

    const createProjectWrapper = async () => {
        const docRef = await createProject(event.id);

        await goto(`/${$page.params.event}/project/${docRef.id}/details`)
    }
</script>

<h1>Matcha</h1>

<h2>Create a project at event {event.name}</h2>

<button class="btn variant-filled" on:click={() => createProjectWrapper()}>Create Project</button>