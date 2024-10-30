export type Character = {
    id: number;
    firstName: string | null;
    lastName: string | null;
}
export type Relation = {
    idChar1: number;
    idChar2: number;
    about: string | null;
}
