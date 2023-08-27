<script lang="ts">
    import QRCode from "$lib/components/QRCode.svelte";
    import { page } from "$app/stores";

    const url = `${$page.url.origin}/${$page.params.event}/user`;
    const urlProject = `${$page.url.origin}/${$page.params.event}/project`;

    export let data;
    let eventDetail = data.event;
</script>


<div class='browncalling border brown'>
	<p class='hal-size2-reg'>Event created!</p>
	<p class='cas-size5-reg'>{eventDetail.name}</p>
</div>
<div class='steps'>
    <div class='step' style="text-align: center;">
        <div class='cas-size3-reg'>Attendee Links</div>
        <br>
        <a href={url}>{url}</a>
        <QRCode url={url} />
        <p class='hal-size2-reg'>Attendees scan the QR code or use this code to access their log in page and create their profile.</p>
    </div>
    <div class='step' style="text-align: center;">
        <div class='cas-size3-reg' >Project Manager Links</div>
        <br>
        <a href={urlProject}>{urlProject}</a>
        <QRCode url={urlProject} />
        <p class='hal-size2-reg'>Attendees scan the QR code or use this code to access their log in page and create their profile.</p>
    </div>
</div>

