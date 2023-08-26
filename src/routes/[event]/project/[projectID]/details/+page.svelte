<script lang='ts'>
  import { page } from '$app/stores';
    import { updateProject } from '$lib/db/eventProject';

    export let data;
    
    const eventProject = data.eventProject;

    let fullName = eventProject.name;
    let description = eventProject.description;

    let skills : string[] = eventProject.skills;

    let currentSkill = "";

    function addSkill() {
        if (currentSkill === "") {
            alert("Please enter a skill");
            return;
        }

        skills.push(currentSkill);
        currentSkill = "";
        skills = skills;
    }

    async function submitAnswers() {
        if (fullName === "") {
            alert("Please enter a display name");
            return;
        }

        if (description === "") {
            alert("Please enter a description");
            return;
        }

        if (skills.length === 0) {
            alert("Please add at least one required skill");
            return;
        }

        const project : EventProject = {
            id: $page.params.projectID,
            name: fullName,
            description: description,
            members: eventProject.members,
            skills: skills
        }

        await updateProject(project);
        alert("Project created")
        // await goto(`/${event.id}/user/explore`);
    }

    function removeSkill(index: number) {
        skills.splice(index, 1);
        skills = skills;
    }

</script>

<h1>Please create your profile for this event</h1>

<form>
    <label for="fullName">Display name</label>
    <input type="text" id="fullName" bind:value={fullName} />

    <label for="description">Description</label>
    <input type="text" id="description" bind:value={description} />

    {#each skills as skill, i}
        <p>{skill}</p>
        <button class="btn variant-filled" on:click={() => removeSkill(i)}>Remove Question</button>
    {/each}

    <input type="text" bind:value={currentSkill} />
    <button class="btn variant-filled" on:click={() => addSkill()}>Add skill</button>

    <button class="btn variant-filled" on:click={async() => submitAnswers()}>Submit</button>
</form>
