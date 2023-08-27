import {db} from '$lib/firebase';
import {addDoc, arrayUnion, collection, doc, getDoc, updateDoc} from 'firebase/firestore';
import type {DocumentReference, DocumentSnapshot} from 'firebase/firestore';


export function convertEvent(doc : DocumentSnapshot): MatchaEvent {
    const data = doc.data();
    const event: MatchaEvent = {
        name: data?.name ?? "", 
        date: data?.date ?? "",
        id: doc.id ?? "",
        attendees: data?.attendees ?? [],
        category: data?.category ?? "",
        projects: data?.projects ?? [],
        description: data?.description ?? "",
        questions: data?.questions ?? []
    }

    return event;
}

export async function getEvent(id : string) : Promise<MatchaEvent> {
    if (id === "") return convertEvent({} as DocumentSnapshot);

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

export async function createEvent() : Promise<DocumentReference> {
    const docRef = await addDoc(collection(db, "events"), {});

    return docRef;
}

export async function updateEvent(event: MatchaEvent) : Promise<void> {
    const docRef = doc(db, "events", event.id);
    await updateDoc(docRef, event);
}

export async function addUserToEvent(event: MatchaEvent, userID: string) {
    await updateDoc(doc(db, "events", event.id), {
        attendees: arrayUnion(userID)
    });
}

