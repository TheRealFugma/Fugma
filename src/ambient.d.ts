type Event = {
    name: string
    description: string
    skills: string[]
    projects: Project[]
    participants: Person[]
}

type Project = {
    name: string
    skills: string[]
    memebers: Person[]
}

type Person = {
    name: string
    email: string
    skills: string[]
    interests: string[]
}
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
