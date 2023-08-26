<script lang='ts'>
    import { userAuth } from '$lib/stores/userAuth';
    import { updateUser } from '$lib/db/user';
    import { goto } from '$app/navigation';
    import Login from "$lib/components/Login.svelte";
    import { auth } from "$lib/firebase";
    import { signOut } from "firebase/auth";

    export let data;
    
    const event = data.event;

    $userAuth = $userAuth;
    let fullName = $userAuth.name;

    if ($userAuth.answers.length !== event.questions.length) {
        $userAuth.answers = Array(event.questions.length).fill("");
    }

    let answers : string[] = $userAuth.answers;
    let traits : string[] = $userAuth.traits;
    let currentTrait = "";  

    function addTrait() {
        if (currentTrait === "") {
            alert("Please enter a trait");
            return;
        }
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
        alert("Profile created");

        await goto(`/${event.id}/match`);
    }

    function removeTrait(index: number) {
        traits.splice(index, 1);
        traits = traits;
    }

</script>

<div class='border green'>
    {#if $userAuth.email !== ""}
        <p>Logged in as {$userAuth.email}</p>
        <button class="btn variant-filled" on:click={async () => await signOut(auth)}>Logout</button>

        <slot />
    {:else}
        <p>Not logged in</p>
        <Login />
    {/if}
</div>

<h1>Please create your profile for this event</h1>

<form>
    <label for="fullName">Display name</label>
    <input type="text" id="fullName" bind:value={fullName} />
    {#each event.questions as question, i}
        <label for={question}>{question}</label>
        <input type="text" id={question} bind:value={answers[i]} />
    {/each}
    {#each traits as trait, i}
        <p>{trait}</p>
        <button class="btn variant-filled" on:click={() => removeTrait(i)}>Remove Question</button>
    {/each}

    <input type="text" bind:value={currentTrait} />
    <button class="btn variant-filled" on:click={() => addTrait()}>Add trait</button>

    <button class="btn variant-filled" on:click={async() => submitAnswers()}>Submit</button>
</form>

<style>
    .border {
        border: 0.5px solid var(--black);
    }
</style>