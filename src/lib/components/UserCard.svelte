<script lang='ts'>
    export let name: string;
    export let score: number;
    export let description : string;
    export let action : string;

</script>

<div class='card'>
    <div class='photo'>
        <div class='circle grey'>
            {name.split(" ").slice(0,2).map((word) => word[0]).join("")}
        </div>
    </div>
    <div class='name hal-size2-reg'>
        {name}
    </div>
    <div class='bar'></div>
    <div class='description hal-size1-reg'>
        {description}
    </div>
    <div class='score green hal-size1-reg'>
        <span class=''>Matchaness:</span> <span class='cas-size2-reg'
            style="font-size: 15pt">{score.toFixed(4) * 200}</span>
    </div>
    <div class='action brown'><b>{action}</b></div>
</div>

<style>
    .score {
        text-align: center;
        border-radius: 15px;
        width: 80%;
        margin: 10px;
        padding: 5px;   
    }
    .card {
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 10px;
        margin: 20px;
        width: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .circle {
        border-radius: 50%;
        text-align: center;
        height:8rem;
        width: 8rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        color: #fafafa;
        font-size: 5rem;
    }
    .description {
        padding: 10px;
        text-align: center;
        margin-top: -5px;
    }
    .bar {
        width: 80%;
        height: 1px;
        margin: 5px;
        background-color: var(--black);
    }
    .photo {
        padding: 10px;
        display: flex;
        justify-content: center;
    }
    .name {
        padding: 10px;
        text-align: center;
    }
    .action {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80px;
        width: 80px;
        top: 0;
        right: 0;
        transform: translate(20px, -20px);
        border: 1px solid var(--black);
        border-radius: 50%;
        font-size: 15pt;
    }

    .action:hover {
        transform: scale(1.2) translate(20px, -20px);
        transition: 0.2s;
    }
</style>