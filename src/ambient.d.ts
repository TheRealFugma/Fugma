type EventProject = {
    id: string,
    name: string,
    description: string,
    skills: string[],
    members: string[],
}

type MatchaEvent = {
    name: string,
    id: string,
    date: string,
    attendees: string[],
    projects: string[],
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
