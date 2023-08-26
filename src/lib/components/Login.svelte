<script lang="ts">
    import { auth } from '$lib/firebase';
    import { signInWithEmailAndPassword } from "firebase/auth";

    let email = "";
    let password = "";

    async function login (email:string, password:string) {
        const user = await signInWithEmailAndPassword(auth, email, password);

        console.log(user);
    }
</script>

<input type="text" bind:value={email} />
<input type="text" bind:value={password} />

<button class="btn variant-filled" on:click={async () => login(email, password)}>Login</button>