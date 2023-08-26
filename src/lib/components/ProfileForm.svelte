<script lang='ts'>
    export let questions : string[];
    export let answers : string[];
    import '$lib/style/fonts.css'
</script>

<div class='profile border'>
    <div class='photo'>
        <div class='circle grey'>
            {#if answers[0] !== ""}
            {answers[0].split(" ").map((word) => word[0]).join("")}
            {/if}
        </div>
    </div>
    <div class='questions'>
        {#each questions as question, index}
        <div class='question'>
            <div class='questionText hal-size1-reg '>{question}</div>
            <input class='hal-size1-reg' bind:value={answers[index]} on:change={() => {answers=answers}}/>
        </div>
        {/each}
    </div>
</div>

<style>
    .border {
        border: 0.5px solid var(--black);
    }
    .profile {
        position: relative;
        max-width: 20rem;
    }
    .circle {
        border-radius: 50%;
        text-align: center;
        height:8rem;
        width: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        color: #fafafa;
        font-size: 5rem;
    }
    .photo {
        padding: 20px;
        display: flex;
        justify-content: center;
    }
    .questions {
        margin: 0 auto 0 auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .question {
        margin-bottom: 10px;
    }
    .questionText {
        font-weight: 100;
        opacity: 0.6;
    }
    input {
        line-height: 20px;
        padding: 8px;
    }

</style>