<script lang="ts">
    import QRCode from "$lib/components/QRCode.svelte";

    import { page } from "$app/stores";

    const url = `${$page.url.origin}/${$page.params.event}/user`;
</script>

<QRCode url={url} />

<a href={url}>{url}</a>