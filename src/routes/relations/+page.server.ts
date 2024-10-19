import { fetchAllRelations } from "$lib/server/db/queries";

export const load = async () => {
    const result = await fetchAllRelations();
    return {
        result
    };
};
