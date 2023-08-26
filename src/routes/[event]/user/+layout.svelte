<script lang="ts">
    import Login from "$lib/components/Login.svelte";
    import { auth } from "$lib/firebase";
    import { userAuth } from "$lib/stores/userAuth";
    import { signOut } from "firebase/auth";
</script>

{#if $userAuth.email !== ""}
    <p>Logged in as {$userAuth.email}</p>
    <button class="btn variant-filled" on:click={async () => await signOut(auth)}>Logout</button>

    <slot />
{:else}
    <p>Not logged in</p>

    <Login />
{/if}
