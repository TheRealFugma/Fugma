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

async function getPersonProjectRatio(person: MatchaUser, project: EventProject) {
    let score1 = getArrayMatchRatio(person.traits, project.skills)
    const response = await fetch(
        "http://152.69.170.8:8080/api",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"text1": person.answers.join(" "),
                                  "text2": project.description})
        })
    let score2 = (await response.json())["similarity"]
    return score2 === null ? (score1 + score2) / 2 : score1
}

export async function personMatchProjects(
    person: MatchaUser, projects: EventProject[], _n?: number, _cutoff?: number
): Promise<[EventProject, number][]> {
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
    let projectScores: [EventProject, number][] = []
    for (const item of projects) {
        projectScores.push([item, await getPersonProjectRatio(person, item)])
    }
    return projectScores
        .filter((pair) => pair[1] >= cutoff)
        .sort((pair1, pair2) => pair1[1] - pair2[1])
        .slice(-n)
}

async function getPersonPersonRatio(person1: MatchaUser, person2: MatchaUser) {
    let score1 = getArrayMatchRatio(person1.traits, person2.traits)
    const response = await fetch(
        "http://152.69.170.8:8080/api",
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"text1": person1.answers.join(" "),
                                  "text2": person2.answers.join(" ")})
        })
    let score2 = (await response.json())["similarity"]
    return score2 === null ? (score1 + score2) / 2 : score1
}


export async function personMatchPeople(
    person: MatchaUser, people: MatchaUser[], _n?: number, _cutoff?: number
): Promise<[MatchaUser, number][]> {
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
    let personScores: [MatchaUser, number][] = []
    for (const person2 of people) {
        personScores.push([person2, await getPersonPersonRatio(person, person2)])
    }
    return personScores
        .filter((pair) => pair[1] >= cutoff)
        .sort((pair1, pair2) => pair1[1] - pair2[1])
        .slice(-n)
}

