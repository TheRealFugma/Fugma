<script>
    import { createEvent } from '$lib/db/event'
    import Login from '$lib/components/Login.svelte';

    import { page } from '$app/stores';

</script>

<Login />

<h1>Fugma</h1>

<button class="btn variant-filled" on:click={() => createEvent()}>Create Event</button>