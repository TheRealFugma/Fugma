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
