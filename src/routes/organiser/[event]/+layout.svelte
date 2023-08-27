<script>
    export let data;
    let event = data.event;
</script>

<div class='border pad'>
 <div class='nav_inner'>
  <div class='nav_logo'>
    <div class='circle'></div>
    <h1 class='cas-size2-reg'>Matcha</h1>
  </div> 
  <div class='event_name'>
    <h1 class='cas-size3-reg'>{event.name}</h1>
  </div>
 </div>
</div>

<slot />

<style>
	.border {
		border: 0.5px solid var(--black);
	}
	.pad {
		padding: 0.5rem;
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