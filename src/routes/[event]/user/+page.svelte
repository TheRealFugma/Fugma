<script lang='ts'>
    import { goto } from '$app/navigation';
    import { addUserToEvent } from '$lib/db/event';
    import { userAuth } from '$lib/stores/userAuth';

    export let data;

    const event = data.event;

    async function userJoinEvent() {
        await addUserToEvent(event, $userAuth.id);

        await goto(`/${event.id}/user/profile`)
    }
</script>

{#if event.name !== ""}
    <h1>Welcome to {event.name}</h1>
    <p>{event.description}</p>
    <p>Number of attendees: {event.attendees.length}</p>
    <button on:click={() => userJoinEvent()}>
        Join event
    </button>
{:else}
    <h1>Event not found</h1>
{/if}
