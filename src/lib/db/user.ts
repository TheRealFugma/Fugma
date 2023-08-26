import { db } from '$lib/firebase';
import { arrayUnion, doc, getDoc, setDoc, updateDoc} from 'firebase/firestore';

import type { DocumentSnapshot } from 'firebase/firestore';
import type { User } from 'firebase/auth';

function convertUser(snap : DocumentSnapshot) : MatchaUser {
    const data = snap.data();
    const user: MatchaUser = {
        id: snap.id,
        name: data?.name ?? "",
        email: data?.email ?? "",
        answers: data?.answers ?? [],
        traits: data?.traits ?? []
    }
    return user;
}

export async function createUser(user : User) : Promise<void> {
    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {id: user.uid, email: user.email, answer: [], traits: []});
}

export async function updateUser(user : MatchaUser) : Promise<void> {
    const docRef = doc(db, "users", user.id);
    await setDoc(docRef, user);
}

export async function getUser(id : string) : Promise<MatchaUser> {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("User connected: ", docSnap.data().name);
        return convertUser(docSnap);
    } else {
        console.log("No such user!");
        return convertUser(docSnap);
    }
}

export async function addUserToProject(projectID:string, userID: string) : Promise<void>  {
    await updateDoc(doc(db, "projects", projectID), {
        members: arrayUnion(userID)
    });
}

