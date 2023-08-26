<script lang="ts">
    import QRCode from 'qrcode';

    export let url = "";

    const generateQR = async (url: string) => {
        try {
            return await QRCode.toDataURL(url, { errorCorrectionLevel: 'H', width: 500 });
        } catch (err) {
            console.error(err);
            return "";
        }
    };
</script>


{#await generateQR(url) then qrCode}
    <img src={qrCode} alt="QR Code" width="250"/>
    <br/>

    <a class="btn variant-filled" href={url}>Join our event!</a>
    <br/>
{/await}