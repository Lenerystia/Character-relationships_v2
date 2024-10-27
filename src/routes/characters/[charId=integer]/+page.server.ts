import { fetchCharacter } from "$lib/server/db/queries.js";

export async function load({ params }) {
    const paramsCharacterId: string = params.charId;
    const characterId: number = parseInt(paramsCharacterId);
    const result = await fetchCharacter(characterId)
    console.log(result);
    return {
        result
    };
}