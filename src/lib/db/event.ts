import {db} from '$lib/firebase';
import {doc, getDoc} from 'firebase/firestore';

async function getEvent(id : string) {
    const docRef = doc(db, "events", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Event connected: ", docSnap.data().name);
        return docSnap.data();
    } else {
        console.log("No such event!");
        return null;
    }
}

export {getEvent};
