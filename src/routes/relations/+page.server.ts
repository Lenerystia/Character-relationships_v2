import { fetchAllRelations } from '$lib/server/db/queries';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const relations = await fetchAllRelations();
	if (relations.length === 0) {
		throw error(404, { message: 'Relations not found' });
	}
	return {
		relations
	};
};
