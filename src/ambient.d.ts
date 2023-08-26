type MatchaEvent = {
    name: string,
    id: string,
    date: string,
    attendees: number,
    description: string,
    questions: string[],
}

type MatchaUser = {
    id: string,
    name: string,
    email: string,
    answers: string[],
    traits: string[]
}