import { fetchAllCharacters, fetchAllRelations } from "$lib/server/db/queries";

interface Character {
    id: number;
    firstName: string | null;
    lastName: string | null;
}

interface Relation {
    idChar1: number;
    idChar2: number;
    about: string | null;
}

export async function load() {
    const characters: Character[] = await fetchAllCharacters();
    const relations: Relation[] = await fetchAllRelations();

    return {
        characters,
        relations
    };
}
