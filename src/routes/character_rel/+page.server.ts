import { fetchCharacterRelatedWithSecondCharacter } from "$lib/server/db/queries";

export const load = async () => {
    const result = await fetchCharacterRelatedWithSecondCharacter();
    return {
        result
    };
};
