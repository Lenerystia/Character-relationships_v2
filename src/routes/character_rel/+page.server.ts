import { fetchAllCharacters, fetchAllRelations } from "$lib/server/db/queries";
import type { Character, Relation } from "$lib/types/types";

export async function load() {
    const characters: Character[] = await fetchAllCharacters();
    const relations: Relation[] = await fetchAllRelations();

    return {
        characters,
        relations
    };
}
