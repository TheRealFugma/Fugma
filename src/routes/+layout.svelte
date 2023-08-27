<script lang="ts">  
</script>

<slot />

<div class='footbox black' >
     <div class='nav_logo' >
       <div class='circle' ></div>
       <h1 class='cas-size3-reg' style="color: white;" >fugma</h1> 
    </div>
</div>

<style>
	.footbox {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0rem 0 0rem 0;
		border: 0.5px solid var(--black);
	}
    .black {
    background-color: var(--black);
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