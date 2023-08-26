<script lang='ts'>
	import '$lib/style/colors.css'
	import '$lib/style/fonts.css'

	let selected : number = 0;
	function selectOption(index : number) {
		selected = index;
	}
</script>

<div class='border pad'>
 <div class='nav_inner'>
  <div class='nav_logo'>
    <div class='circle'></div>
    <h1 class='cas-size3-reg'>fugma</h1>
  </div> 
 </div>
</div>
<div class='calling border'>
	<h1 class='cas-size5-reg'>Welcome to <em>Fugma</em></h1>
	<p class='hal-size1-reg sub'>Automatically form groups and allocate<br/> attendees based on skills</p>
</div>
<div class="border">
	<div class='a-o-option border'>
		<button class={`option cas-size2-reg ${selected === 0 ? 'selected' : ''}`}
			on:click={() => selectOption(0)}>for Organisers</button>
		<button class={`option cas-size2-reg ${selected === 1 ? 'selected' : ''}`}
			on:click={() => selectOption(1)}>for Attendees</button>
	</div>
	<div class='steps'>
		{#if selected == 0}
		<div class='step'>
			<div class='number cas-size6-reg'>01</div>
			<p class='hal-size2-reg'>Create an <b>event</b> and descibe what it's about</p>
			<p class='hal-size2-reg'>Tell us how want your attendees to be <b>grouped</b></p>
		</div>
		<div class='step'>
			<div class='number cas-size6-reg'>02</div>
			<p class='hal-size2-reg'>Share the <b>invite code</b> with your attendees</p>
			<p class='hal-size2-reg'>Wait for them to inpute their <b>skills and traits</b></p>
		</div>
		<div class='step'>
			<div class='number cas-size6-reg'>03</div>
			<p class='hal-size2-reg'>Let our algorithm match your attendees with one another to <b>form their groups</b></p>
		</div>
		{:else}
		<div class='step'>
			<div class='number cas-size6-reg'>01</div>
			<p class='hal-size2-reg'>Join the event space by inputting the <b>event code</b></p>
		</div>
		<div class='step'>
			<div class='number cas-size6-reg'>02</div>
			<p class='hal-size2-reg'>Fill in your details, <b>skills and traits</b></p>
		</div>
		<div class='step'>
			<div class='number cas-size6-reg'>03</div>
			<p class='hal-size2-reg'>Swipe through potential <b>partners</b> and <b>group memebers</b></p>
		</div>
		{/if}

	</div>
</div>

<style>
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

	.calling {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 5rem 0 5rem 0;
	}
	.sub {
		margin-top: 1rem;
		text-align: center;
	}
	.a-o-option {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.option {
		text-align: center;
		width:50%;
		padding: 2rem 0;

	}
	.option.selected {
		background-color: var(--black);
		color: #FFFFFF;
	}
	.steps {
		display: flex;
		flex-direction: row;
		height: 15rem;
	}
	.step {
		width: 100%;
		padding: 3rem;
		border: 1px solid var(--black);
	}
	.step .number {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 1.2rem;
	}
	.step p {
		margin-bottom: 1.5rem;
	}



</style>