<script lang="ts">
    import { updateEvent } from '$lib/db/event';

    import { goto } from '$app/navigation';

    export let data;
    const eventDetail = data.event;

    // Edit the details of the event
    let currentQuestion = "";

    async function updateEventWrapper() {
        if (eventDetail.name === "") {
            alert("Please enter an event name");
            return;
        }

        if (eventDetail.description === "") {
            alert("Please enter an event description");
            return;
        }

        if (eventDetail.date === "") {
            alert("Please enter an event date");
            return;
        }

        if (eventDetail.questions.length === 0) {
            alert("Please add at least one question");
            return;
        }

        if (eventDetail.category === "") {
            alert("Please select a category");
            return;
        }

        await updateEvent(eventDetail);
        alert("Event updated");

        await goto(`/organiser/${eventDetail.id}/invite`); 
    }

    function removeQuestion(index: number) {
        eventDetail.questions.splice(index, 1);
        eventDetail.questions = eventDetail.questions;
    }

    function addQuestion() {
        if (currentQuestion === "") {
            alert("Please enter a question");
            return;
        }

        eventDetail.questions.push(currentQuestion);
        currentQuestion = "";
        eventDetail.questions = eventDetail.questions;
    }

</script>

<h1>Edit Event</h1>

<input bind:value={eventDetail.name} type="text" placeholder="Event Name" />
<input bind:value={eventDetail.description} type="text" placeholder="Event Description" />
<input bind:value={eventDetail.date} type="date" placeholder="Date" />

<select bind:value={eventDetail.category}>
    <option value="Web Development">Group Mode</option>
    <option value="Mobile Development">Project Mode</option>
</select>

{#each eventDetail.questions as question, i}
    <input bind:value={question} type="text" placeholder="Question" />
    <button class="btn variant-filled" on:click={() => removeQuestion(i)}>Remove Question</button>
{/each}

<input bind:value={currentQuestion} type="text" placeholder="Question" />
<button class="btn variant-filled" on:click={() => addQuestion()}>Add Question</button>

<button class="btn variant-filled" on:click={() => updateEventWrapper()}>Update Event</button>

