<script lang="ts">
    import { auth } from '$lib/firebase';
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
    import { createUser } from '$lib/db/person';

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

<input type="email" bind:value={email} />
<input type="password" bind:value={password} />

<button class="btn variant-filled" on:click={async () => login(email, password)}>Login</button>