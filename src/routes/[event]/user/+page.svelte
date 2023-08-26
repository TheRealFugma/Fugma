<script lang='ts'>
    import {page} from '$app/stores';
    import {getEvent} from '$lib/db/event';
    import {onMount} from 'svelte';

    let eventId = $page.params.event;

    async function loadEvent() : Promise<Event> {
        return await getEvent(eventId);
    }

</script>
{#await loadEvent() then event}
    <h1>Welcome to {event.name}</h1>
{:catch error}
    <h1>Something went wrong</h1>
{/await}
<style>
</style>