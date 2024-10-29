import { fetchCharacter } from "$lib/server/db/queries.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    //TODO: canParseToInt
    const paramsCharacterId: string = params.charId;
    if (!/^\d+$/.test(paramsCharacterId)) {
        throw error(400, { message: "Character ID must contain only digits 0 to 9." });
    }
    const characterId: number = parseInt(paramsCharacterId);
    if (isNaN(characterId)) {
        throw error(400, { message: "Character ID must be a number from 1 to " + Number.MAX_SAFE_INTEGER });
    }
    //TODO: isCharacterValid wrzucić w funkcję
    if (characterId<=0 || characterId>Number.MAX_SAFE_INTEGER) {
        throw error(400, { message: "Character ID must be a number from 1 to " + Number.MAX_SAFE_INTEGER });
    }
    const result = await fetchCharacter(characterId)
    if (result.length === 0) {
        throw error(404, {message:'Character not found'});
    }
    return {
        result
    };
}