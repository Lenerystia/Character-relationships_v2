import { fetchAllCharacters } from "$lib/server/db/queries";

export const load = async () => {
    const result = await fetchAllCharacters();
    return {
        result
    };
};
