import { writable } from "svelte/store";
import { onAuthStateChanged } from "firebase/auth";
import { getUser } from "$lib/db/person";
import { auth } from "$lib/firebase";

export const userAuth  = writable<MatchaUser>({
    id: "",
    name: "",
    email: "",
    answers: [],
    traits: []
});
onAuthStateChanged(auth, async (user) => {
    if (user) {
        userAuth.set(await getUser(user.uid));
    } else {
        console.log("No user logged in");
        userAuth.set({
            id: "",
            name: "",
            email: "",
            answers: [],
            traits: []
        });
    }
});