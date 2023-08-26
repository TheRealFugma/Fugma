import { getEventProject } from '$lib/db/eventProject';

export async function load({ params }) {
    return {
        eventProject: await getEventProject(params.event)
    };
}