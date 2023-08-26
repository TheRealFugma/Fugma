<script lang="ts">
    import { createAccount } from '$lib/db/person'
    import Button from '$lib/components/Button.svelte'

    let name = 'Joe';
    let password = '123456';


</script>


<Button />

<input type="text" bind:value={name} />
<input type="text" bind:value={password} />