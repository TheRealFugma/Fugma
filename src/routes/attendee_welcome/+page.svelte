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
    <h1 class='cas-size3-reg'>Matcha</h1>
  </div> 
 </div>
</div>
<div class='calling border'>
	<h1 class='cas-size5-reg'>Hackathon 2023</h1>
	<br/>
	<br/>
	<div class="title-line"></div>
	<br/>
	<p class='hal-size1-reg sub'>SYNCS HACK is back for another year with an explosive 24-hour brain cell<br/> crunch where YOU will compete with other teams to ideate, develop and<br/> pitch your very own idea!</p>
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
	.title-line {
		width: 100px; /* Adjust line length */
		height: 2px; /* Adjust line thickness */
		background-color: #333; /* Adjust line color */
		margin: 0 auto; /* Center the line */
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
		min-height: 15rem;
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

body {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  height: 100vh;
  overflow: auto;
}

.events-container {
  display: flex;
  flex: 1;
  width: 100%;
}

.left-container {
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: #f0f0f0;
  padding: 20px;
}

.right-container {
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #ccc;
  padding: 20px;
}

.events_description {
  flex: 1;
  background-color: #fff;
  margin: 10px 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
}

.column {
  flex: 1;
  padding: 0 10px;
}

.logo-container {
  display: flex;
  width: 100%;
  background-color: black;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.split-boxes {
  display: flex;
  width: 100%;
  justify-content: center;

}

.split-box {
  display: flex;
  flex-direction: column;
  background-color: #ccc;
  padding: 20px;
  margin: 5px;
  align-items: center;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.header {
background-color: white;
color: black;
padding: 20px;
}

.content {
flex: 1;
overflow-y: auto; /* Enable vertical scrolling */
padding: 20px;
}


</style>