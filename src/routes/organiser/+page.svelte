<script>
    import { createEvent } from '$lib/db/event';
    import { goto } from '$app/navigation';

    const createEventWrapper = async () => {
        const docRef = await createEvent();

        await goto(`/organiser/${docRef.id}`)
    }
</script>

<h1>Fugma</h1>

<button class="btn variant-filled" on:click={() => createEventWrapper()}>Create Event</button>