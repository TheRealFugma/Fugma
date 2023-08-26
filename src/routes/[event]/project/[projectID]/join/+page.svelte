<script lang="ts">
    import { invalidateAll } from '$app/navigation';
    import { addUserToProject } from '$lib/db/user';
    import { userAuth } from '$lib/stores/userAuth';

    export let data;

    const event = data.event;
    const eventProject: EventProject = data.eventProject;

    console.log(eventProject)

    async function joinProject(userID: string) {
        await addUserToProject(eventProject.id, userID);

        if (eventProject.members.indexOf(userID) === -1) {
            eventProject.members = [...eventProject.members, userID];
        }
    }
</script>

<h1>{eventProject.name}</h1>

<h2>{eventProject.description}</h2>

{#each eventProject.skills as skill}
    {skill}
{/each}

{#each eventProject.members as member}
    {member}
    <br/>
{/each}

<button class="btn variant-filled" on:click={async () => await joinProject($userAuth.id)}>Join Project</button>
