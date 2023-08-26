<script lang="ts">
    import { auth } from '$lib/firebase';
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
    import { createUser } from '$lib/db/user';

    let email = "";
    let password = "";

    async function login (email:string, password:string) {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            
        } catch (error) {
            console.log("User not found");
            await signUp(email, password);
        } finally {
            console.log("User logged in");
        }

    }
    async function signUp (email:string, password:string) {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        await createUser(user.user);
    }
</script>

<div class='across'>
    <div class='down'>
        <input class='input' 
            placeholder='email' type="email" bind:value={email} />
        <input class='input' 
            placeholder='password' type="password" bind:value={password} />
    </div>
    <button class="login green " on:click={async () => login(email, password)}>Login</button>
</div>

<style>
    .across {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        gap: 10px;
    }
    .down {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 4rem;
    }
    .login {
        height: 4rem;
        border: 1px solid var(--black);
        border-radius: 2px;
    }

    .input {
        margin-left: auto;
        width: 15rem;
    }
</style>