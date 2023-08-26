import { getEvent } from "$lib/db/event";
import { getUser } from "$lib/db/user";

export async function GET({ url }) {
    const eventID = url.params.get("eventID");
    const userID = url.params.get("userID");

    const event: MatchaEvent = await getEvent(eventID);
    const user: MatchaUser = await getUser(userID);

    const projects = event.projects;

    personMatchPeople

    


}