import { db } from "$lib/firebase";
import { DocumentSnapshot, addDoc, arrayUnion, collection, doc, getDoc, updateDoc } from "@firebase/firestore";

export async function createProject(eventID: string) {
    const docRef = await addDoc(collection(db, "projects"), {});

    await updateDoc(doc(db, "events", eventID), {
        projects: arrayUnion(docRef.id)
    });

    return docRef;
}

export async function updateProject(project: EventProject) {
    const docRef = doc(db, "projects", project.id);
    await updateDoc(docRef, project);
}

export async function getEventProject(projectID: string): Promise<EventProject> {
    if (projectID === "") return convertEventProject({} as DocumentSnapshot);

    const docRef = doc(db, "projects", projectID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return convertEventProject(docSnap);
    } else {
        console.log("No such project!");
        return convertEventProject(docSnap);
    }
}

function convertEventProject(doc: DocumentSnapshot): EventProject {
    const data = doc.data();

    const project: EventProject = {
        id: doc.id,
        name: data?.name ?? "",
        description: data?.description ?? "",
        members: data?.members ?? [],
        skills: data?.skills ?? []
    }

    return project;
}