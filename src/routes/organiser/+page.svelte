<script>
    import '$lib/style/fonts.css';
    import '$lib/style/colors.css';

    import { createEvent } from '$lib/db/event';
    import { goto } from '$app/navigation';

    const createEventWrapper = async () => {
        const docRef = await createEvent();

        await goto(`/organiser/${docRef.id}`)
    }
</script>

<div class="calling">
    <h1 class='cas-size6-reg'>Fugma</h1>

    <div class='line'></div>

    <div class='border calling grey'>
        <p class='hal-size2-reg'>Your event will be smooth and organised.</p>
        <button class='button hal-size3-reg' on:click={() => createEventWrapper()}>
            Create Event
        </button>
    </div>
</div>


<style>
    .calling {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem;
    }

    .line {
        width: 30%;
        height: 2px;
        background-color: var(--black);
    }
    
    .border {
        border: 0.5px solid var(--black);
    }
    
    .button {
        background-color: var(--white);
        height: 150px;
        width: 200px;
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
