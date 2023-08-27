import {levenshteinEditDistance} from 'levenshtein-edit-distance'


export function getMatchRatio(word1: string, word2: string) {
    var distance = levenshteinEditDistance(word1, word2, true)
    return 1 - distance / Math.max(word1.length, word2.length)
}

export function getClosestMatches(
    word: string, possibilities: string[], _n?: number, _cutoff?: number
): string[] {
    if (typeof _n === "undefined") {
        var n = 3
    } else {
        var n = _n
    }
    if (typeof _cutoff === "undefined") {
        var cutoff = 0.6
    } else {
        var cutoff = _cutoff
    }
    return possibilities.map((item) => [item, getMatchRatio(word, item)] as [string, number])
        .filter((pair) => pair[1] >= cutoff)
        .sort((pair1, pair2) => pair1[1] - pair2[1])
        .slice(-n)
        .map((pair) => pair[0])
}

export function getArrayMatchRatio(list1: string[], list2: string[]) {
    var raw: number = 0
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            raw += getMatchRatio(list1[i], list2[j])
        }
    }
    return raw / list1.length / list2.length
}

export function personMatchProjects(
    person: MatchaUser, projects: EventProject[], _n?: number, _cutoff?: number
): [EventProject, number][] {
    if (typeof _n === "undefined") {
        var n = 99999999
    } else {
        var n = _n
    }
    if (typeof _cutoff === "undefined") {
        var cutoff = 0
    } else {
        var cutoff = _cutoff
    }
    return projects.map((item) => [item, getArrayMatchRatio(person.traits, item.skills)] as [EventProject, number])
        .filter((pair) => pair[1] >= cutoff)
        .sort((pair1, pair2) => pair1[1] - pair2[1])
        .slice(-n)
}

export function personMatchPeople(
    person: MatchaUser, people: MatchaUser[], _n?: number, _cutoff?: number
): [MatchaUser, number][] {
    if (typeof _n === "undefined") {
        var n = 99999999
    } else {
        var n = _n
    }
    if (typeof _cutoff === "undefined") {
        var cutoff = 0
    } else {
        var cutoff = _cutoff
    }
    return people.map((item) => [item, getArrayMatchRatio(person.traits, item.traits)] as [MatchaUser, number])
        .filter((pair) => pair[1] >= cutoff)
        .sort((pair1, pair2) => pair1[1] - pair2[1])
        .slice(-n)
}

