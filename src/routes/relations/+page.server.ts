import { RelationModel } from '$lib/server/model/RelationModel';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const relations = await RelationModel.getListRelations();
	if (relations.length === 0) {
		throw error(404, { message: 'Relations not found' });
	}
	return {
		relations
	};
};
