<script lang='ts'>
    export let data;
    const event = data.event;
</script>

{#if event.name !== ""}
<h1>Welcome to {event.name}</h1>
<p>{event.description}</p>
<p>Number of attendees: {event.attendees}</p>
<a href={`/${event.id}/user/signIn`}>
    <button> Join event </button>
</a>
{:else}
<h1>Event not found</h1>
{/if}
<style>
</style>