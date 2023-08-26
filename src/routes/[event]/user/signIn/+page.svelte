<script lang='ts'>
    import Login from '$lib/components/Login.svelte';
    import { auth } from '$lib/firebase';
    import { signOut } from 'firebase/auth';
    import { userAuth } from '$lib/stores/userAuth';
    import { updateUser } from '$lib/db/person.js';
    import { goto } from '$app/navigation';

    export let data;
    const event = data.event;

    let fullName = "";
    let answers : string[] = Array(event.questions.length).fill("");
    let traits : string[] = [];

    let currentTrait = "";
    function addTrait() {
        traits.push(currentTrait);
        currentTrait = "";
        traits = traits;
    }

    async function submitAnswers() {
        if (fullName === "") {
            alert("Please enter a display name");
            return;
        }
        if (answers.includes("")) {
            alert("Please answer all questions");
            return;
        }
        if (traits.length === 0) {
            alert("Please add at least one trait");
            return;
        }
        const user : MatchaUser = {
            name: fullName,
            id : $userAuth.id,
            email: $userAuth.email,
            answers: answers,
            traits: traits
        }
        await updateUser(user);
        await goto(`/${event.id}/user/explore`);
    }

</script>

<h1>Sign in</h1>

<Login ></Login>
{#if $userAuth.email !== ""}
    <p>Logged in as {$userAuth.email}</p>
    <button class="btn variant-filled" on:click={async () => await signOut(auth)}>Logout</button>

    <form>
        <label for="fullName">Display name</label>
        <input type="text" id="fullName" bind:value={fullName} />
        {#each event.questions as question, i}
            <label for={question}>{question}</label>
            <input type="text" id={question} bind:value={answers[i]} />
        {/each}
        {#each traits as trait}
            <p>{trait}</p>
        {/each}

        <input type="text" bind:value={currentTrait} />
        <button class="btn variant-filled" on:click={() => addTrait()}>Add trait</button>

        <button class="btn variant-filled" on:click={async() => submitAnswers()}>Submit</button>
    </form>
{/if}
