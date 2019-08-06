export interface Contact {
    tel: string;
    cel: string;
    address: string;
    website: string;
    mail: string;
}

export interface Skill {
    name: string;
    value: string;
}

export interface Experience {
    name: string;
    date: string;
    description: string;
}

export interface Education {
    name: string;
    date: string;
    description: string;
}

export interface Profile {
    image: string;
    name: string;
    profession: string;
    description: string;
    contact: Contact;
    skills: Skill[];
    experience: Experience[];
    education: Education[];
}

export interface CurriculumVitae {
    profile: Profile;
}