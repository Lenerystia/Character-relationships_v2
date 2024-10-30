import { fetchCharacter } from "$lib/server/db/queries.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    // canParseToInt
    // const paramsCharacterId: string = params.charId;
    // if (!/^\d+$/.test(paramsCharacterId)) {
    //     throw error(400, { message: "Character ID must contain only digits 0 to 9." });
    // }
    //TODO: Dopytać
    // w momencie w którym ktoś wpisze tekst dostanie to ^, a potem wpisze 0 i dostanie to poniżej - chyba lepiej zostawić tylko to na dole
    // bo i tak to pierwsze sprawdza tylko czy jest liczbą, co w sumie sprawdza też to na dole - więc po co dublować?
    // No i przy okazji wywalono dodatkową zmienną, która nie ułatwia niczego
    const characterId: number = parseInt(params.charId);
    if (isNaN(characterId)) {
        throw error(400, { message: "Character ID must be a number from 1 to " + Number.MAX_SAFE_INTEGER });
    }
    //TODO: isCharacterValid extract to functions
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