import {db} from '$lib/firebase';
import {doc, getDoc} from 'firebase/firestore';
import type {DocumentSnapshot} from 'firebase/firestore';


function convertEvent(doc : DocumentSnapshot): MatchaEvent {
    const data = doc.data();
    const event: MatchaEvent = {
        name: data?.name ?? "", 
        date: data?.date ?? "",
        id: doc.id ?? "",
        attendees: data?.attendees ?? 0,
        description: data?.description ?? "",
        questions: data?.questions ?? []
    }

    return event;
}

async function getEvent(id : string) : Promise<MatchaEvent> {
    const docRef = doc(db, "events", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Event connected: ", docSnap.data().name);
        return convertEvent(docSnap);
    } else {
        console.log("No such event!");
        return convertEvent(docSnap);
    }
}

export {getEvent};
