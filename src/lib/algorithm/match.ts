<<<<<<< HEAD
=======
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

export function personMatchProjects(person: Person, projects: Project[]) {

}

export function personMatchPeople(person: Person, people: Person[]) {

}
>>>>>>> c408bda (Fix some problem with get closest match)
