<script lang='ts'>
    import { userAuth } from '$lib/stores/userAuth';
    import { updateUser } from '$lib/db/user';
    import { goto } from '$app/navigation';
    import Login from "$lib/components/Login.svelte";
    import { auth } from "$lib/firebase";
    import { signOut } from "firebase/auth";
    import ProfileForm from '$lib/components/ProfileForm.svelte';
    import QuestionForm from '$lib/components/QuestionForm.svelte';

    export let data;
    
    const event = data.event;

    $userAuth = $userAuth;

    if ($userAuth.answers.length !== event.questions.length) {
        $userAuth.answers = Array(event.questions.length).fill("");
    }
    async function submitAnswers() {
        if (profileAnswers[0] === "") {
            alert("Please enter a display name");
            return;
        }
        if (eventAnswers.includes("")) {
            alert("Please answer all questions");
            return;
        }
        if (skills.length === 0) {
            alert("Please add at least one trait");
            return;
        };

        const user : MatchaUser = {
            name: profileAnswers[0],
            id : $userAuth.id,
            email: $userAuth.email,
            answers: eventAnswers,
            traits: skills
        }

        await updateUser(user);
        alert("Profile created");

        await goto(`/${event.id}/user/match`);
    }

    let profileQuestions = [
        "Display name",
        "Mobile number",
        "Postcode"
    ]
    let profileAnswers = ["", "", ""]

    let eventAnswers = Array(event.questions.length).fill("");
    let skills : string[] = [];
    let intersts : string[] = []


</script>

<div class='border brown loginBox'>
    {#if $userAuth.email !== ""}
        <div class='across'>
            <p>You are logged in as <b>{$userAuth.email}</b></p>
            <button class="grey button" on:click={async () => await signOut(auth)}>Logout</button>
        </div>

        <slot />
    {:else}
        <div>
            <h1 class='cas-size3-reg'>Log in // Sign up</h1>
            <p class='hal-size1-reg'>New to Fugma, Make up a password. <br/> Returning? Use the same password</p>
        </div>
        <Login />
    {/if}
</div>

{#if $userAuth.email === ""}
<div class='popup cas-size3-reg'>
    <p>Please log in to create your profile</p>
</div>
{/if}
<div class={`${$userAuth.email === "" ? 'inactive' : ''}`}>
    <div class='across'>
    <ProfileForm questions={profileQuestions} bind:answers={profileAnswers}/>
    <QuestionForm 
        questions={event.questions} bind:answers={eventAnswers}
        skillon={true} intereston={true} createQuestions={false}
        title={"Answer these event questions"} description={"This event is for tough people"}
        bind:skills={skills} bind:interests={intersts}/>
    </div>
    
    <div class='submit green border'>
        <button class="btn cas-size3-reg" on:click={async() => submitAnswers()}>Submit Response</button>
    </div>
</div>

<style>
    .border {
        border: 0.5px solid var(--black);
    }

    .loginBox {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 10px 0;
    }

    .inactive {
        opacity: 0.2;
        display: flex;
        flex-direction: row;
    }
    
    .popup {
        position: absolute;
        transform: translate(0, 50%);
        width: 100vw;
        text-align: center;
    }
    
    .across {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }

    .button {
        border-radius: 2px;
        border: 1px solid var(--black);
    }
    .across {
        display: flex;
        flex-direction: row;
    }

    .submit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 20px;
    }
    
    .btn {
        border-radius: 2px;
        border: 1px solid var(--black);
        padding: 20px;
    }
</style>