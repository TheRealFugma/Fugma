import { getEvent } from '$lib/db/event'


export const load = (async ({ params }) => {
    return {
       event: await getEvent(params.event)
    }});