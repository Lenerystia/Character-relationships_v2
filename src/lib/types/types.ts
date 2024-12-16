export type TCharacter = {
    id: number;
    firstName: string;
    lastName: string;
}
export type TRelation = {
    id: number;
    idChar1: number;
    idChar2: number;
    about: string;
}
