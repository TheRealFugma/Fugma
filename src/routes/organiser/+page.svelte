<script>
    import '$lib/style/fonts.css';
    import '$lib/style/colors.css';

    import { createEvent } from '$lib/db/event';
    import { goto } from '$app/navigation';


    const createEventWrapper = async () => {
        const docRef = await createEvent();
        
        await goto(`/organiser/${docRef.id}/create`)
    }
</script>

<div class='border pad'>
 <div class='nav_inner'>
  <div class='nav_logo'>
    <div class='circle'></div>
    <h1 class='cas-size3-reg'>Matcha</h1>
  </div> 
 </div>
</div>

    <div class='calling border'>
        <h1 class='cas-size6-reg'>Let's get started</h1>
        <div class='line'></div>
        <p class='hal-size2-reg'>Follow the steps to get an event runninn</p>
    </div>
    <div class='stats'>
        <div class='green stat border'>
            People will be flocking to connect
        </div>
        <div class='brown stat border'>
            Thanks to our algorithm
        </div>
    </div>
    <div class='border calling grey'>
        <p class='hal-size2-reg'>Your event will be smooth and organised.</p>
        <button class='button hal-size3-reg' on:click={() => createEventWrapper()}>
            Create Event
        </button>
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
    .border {
		border: 0.5px solid var(--black);
	}
	.pad {
		padding: 1rem;
	}
	.pad-side {
		padding: 0 1rem;
	}
	.nav_inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
	}
	
	.nav_logo {
		display: flex;
		align-items: center;
	}
	
	.circle {
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background-color: #b0b0b0;
		margin-right: 0.5rem;
	}
</style>
