<script lang='ts'>
    import "$lib/style/fonts.css";
    import "$lib/style/colors.css";

    export let questions : string[];
    export let answers : string[];
    export let skills : string[];
    export let interests : string[];
    export let skillon : boolean;
    export let intereston : boolean;
    export let createQuestions : boolean;
    export let title : string;
    export let description : string;

    let currentSkill : string = "";
    function addSkill() {
        if (currentSkill === "") {
            alert("Please enter a trait");
            return;
        }
        skills.push(currentSkill);
        currentSkill = "";
        skills = skills;
    }
    function removeSkill(index: number) {
        skills.splice(index, 1);
        skills = skills;
    }

    let currentInterest : string = "";
    function addInterest() {
        if (currentInterest === "") {
            alert("Please enter a trait");
            return;
        }
        interests.push(currentInterest);
        currentInterest = "";
        interests = interests;
    }
    function removeInterst(index: number) {
        interests.splice(index, 1);
        interests = interests; 
    }
</script>

<div class='border grey outer'>
    {#if title !== ""}
    <div class='title cas-size2-reg'>
        <h1>{title}</h1>
    </div>
    {/if}
    {#if description !== ""}
    <p class='description hal-size1-reg'>
        {description}
    </p>
    {/if}

    <div>
        {#if !createQuestions}
            <div class='questions hal-size1-reg'>
                {#each questions as question, index}
                <div class='question'>
                    <div class='questionText hal-size1-reg '>{question}</div>
                    <input class='hal-size1-reg' bind:value={answers[index]} on:change={() => {answers=answers}}/>
                </div>
                {/each}
            </div>

            {#if skillon}
                <div class='trait_title cas-size2-reg'>Add your skills</div>
                <input type="text" bind:value={currentSkill} />
                <button class="add brown" on:click={() => addSkill()}>Add skill</button>
                <div class='trait_list'>
                {#each skills as skill, index}
                <div class='trait'>
                    <div class='traitText hal-size1-reg '>{skill}</div>
                    <button class='hal-size1-reg btn' on:click={() => removeSkill(index)}>X</button>
                </div>
                {/each}
                </div>
            {/if}
            {#if intereston}
                <div class='trait_title cas-size2-reg'>Add your interests</div>
                <input type="text" bind:value={currentInterest} />
                <button class="add brown" on:click={() => addInterest()}>Add interest</button>
                <div class='trait_list'>
                {#each interests as interest, index}
                <div class='trait'>
                    <div class='traitText hal-size1-reg '>{interest}</div>
                    <button class='hal-size1-reg btn' on:click={() => removeInterst(index)}>X</button>
                </div>
                {/each}
                </div>
            {/if}
        {/if}
        {#if createQuestions}
                <div class='trait_title'> Add your questions </div>
                <div class='traits_list'>
                {#each skills as skill, index}
                <div class='trait'>
                    <div class='traitText hal-size1-reg '>{skill}</div>
                    <button class='hal-size1-reg btn' on:click={() => removeSkill(index)}>X</button>
                </div>
                {/each}
                </div>
                <input type="text" bind:value={currentSkill} />
                <button class="add brown" on:click={() => addSkill()}>Add skill</button>
        {/if}
    </div>
</div>

<style>
    .border {
        border: 0.5px solid var(--black);
    }
    .title {
        margin-top: -50px;
    }
    .outer {
        padding: 50px;  
        width:100%;
    }
    .description {
        padding: 0 0 20px 0;
    }
    .question {
        margin: 10px;
    }
    .questionText {
        padding: 0 0 8px 0;
        opacity: 0.8;
    }
    .question input {
        padding: 10px;
        width: 100%;
    }
    .trait_list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        margin: 10px 0;

    }
    .trait {
        display: flex;
        flex-direction: row;
        gap: 5px;
        background-color: var(--green);
        padding: 10px;
        border-radius: 15px;
    }
    .btn {
        border-radius: 50px;
        border: none;
        transform: scale(1.2);
    }
    .traitText {
        padding-right: 5px;
    }
    .trait_title {
        padding: 20px 0 10px 0;
    }
    .add {
        text-align: center;
        border: none;
        padding: 10px;
        margin-left: 10px;
        border-radius: 10px;
    }
</style>