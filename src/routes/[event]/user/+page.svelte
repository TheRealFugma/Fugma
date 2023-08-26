<script lang='ts'>
    import '$lib/style/fonts.css';

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
    <div class='calling border'>
        <h1 class='cas-size6-reg'>{event.name}</h1>
        <div class='line'></div>
        <p class='hal-size2-reg'>{event.description}</p>
    </div>
    <div class='stats'>
        <div class='green stat border'>
            {event.attendees.length} people joined
        </div>
        <div class='brown stat border'>
            {event.date}
        </div>
    </div>
    <div class='border calling grey'>
        <p class='hal-size2-reg'>Tell us about yourself and we'll find you your ideal group</p>
        <button class='button hal-size3-reg' on:click={() => userJoinEvent()}>
            Join event
        </button>
    </div>

{:else}

    <h1>Event not found</h1>
{/if}

<style>
    .calling {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem;
    }

    .line {
        width: 30%;
        height: 1px;
        background-color: var(--black);
    }
    
    .border {
        border: 0.5px solid var(--black);
    }
    
    .button {
        background-color: var(--white);
        height: 6rem;
        width: 40vw;
    }

    .stats {
        display: flex;
        justify-content: space-around;
    }
    .stat {
        padding: 20px;
        width: 50%;
        text-align: center;
    }
</style>
