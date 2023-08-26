<script lang="ts">
    import QRCode from "$lib/components/QRCode.svelte";

    import { page } from "$app/stores";

    const url = `${$page.url.origin}/${$page.params.event}/user`;
    const urlProject = `${$page.url.origin}/${$page.params.event}/project`;
</script>

<h3>Join Event As User</h3>

<QRCode url={url} />

<a href={url}>{url}</a>

<h3>Add Projects</h3>

<QRCode url={urlProject} />

<a href={urlProject}>{urlProject}</a>

