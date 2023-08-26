import { SequenceMatcher } from "difflib";

export function stringArrSimilarity(list1: string[], list2: string[]) {
    let score = 0;
    for(let i = 0; i < list1.length; i++) {
        for(let j = 0; j < list2.length; i++) {
            score += new SequenceMatcher(null, list1[i], list2[j]).ratio();
        }
    }

    return score;
}

export function personMatchProjects(person: Person, projects: Project[]) {

}

export function personMatchPeople(person: Person, people: Person[]) {

}
