<script lang="ts">
    import { updateEvent } from '$lib/db/event';
    import ProfileForm from '$lib/components/ProfileForm.svelte';
    import QuestionForm from '$lib/components/QuestionForm.svelte';

    import { goto } from '$app/navigation';

    export let data;
    let eventDetail = data.event;
    let eventType = "";
    
    async function updateEventWrapper() {
        if (profileAnswers[0] === "") {
            alert("Please enter an event name");
            return;
        }
        eventDetail.name = profileAnswers[0];

        if (profileAnswers[2] === "") {
            alert("Please enter an event description");
            return;
        }
        eventDetail.description = profileAnswers[2];

        if (profileAnswers[1] === "") {
            alert("Please enter an event date");
            return;
        }
        eventDetail.date = profileAnswers[1];

        if (skills.length === 0) {
            alert("Please add at least one question");
            return;
        }
        eventDetail.questions = skills;

        if (eventType === "") {
            alert("Please select an event type");
            return;
        }
        eventDetail.category = eventType;

        await updateEvent(eventDetail);
        alert("Event updated");

        await goto(`/organiser/${eventDetail.id}/invite`); 
    }

    let profileQuestions = [
        "Event name",
        "Date",
        "Description",
        "Location"
    ]

    let profileAnswers = ["", "", ""]
    let skills : string[] = [];
    let interests : string[] = []
</script>

<div>
    <div class='across'>
    <ProfileForm questions={profileQuestions} bind:answers={profileAnswers}/>
    <QuestionForm 
        questions={profileQuestions} bind:answers={profileAnswers}
        skillon={true} intereston={true} createQuestions={true}
        title={"Create custom questions for your attendees"} description={"This helps attendeees find like minded people with insightful questions"}
        bind:skills={skills} bind:interests={interests}/>
    </div>
    
    <div class='submit green border'>
        <div>
            <div class='cas-size2-reg'>Select event type</div>
            <select name='Event type' bind:value={eventType}>
                <option value='Group Mode'>Find a group</option>
                <option value='Project Mode'>Find a Project</option>
            </select>
        </div>
        <button class="btn cas-size3-reg" on:click={async() =>updateEventWrapper()}>Create Event!</button>
    </div>
</div>

<style>
    .border {
        border: 0.5px solid var(--black);
    }

    .across {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
    }
    .across {
        display: flex;
        flex-direction: row;
    }

    .submit {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 20px;
        gap: 20px;
    }
    
    .btn {
        border-radius: 2px;
        border: 1px solid var(--black);
        padding: 20px;
    }

    .selection {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>


