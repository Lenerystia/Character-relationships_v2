import { RelationFormatter } from '$lib/class/formattters/RelationFormatter';
import type { Relations } from '$lib/class/Relations';
import { RelationRepository } from '$lib/server/repositories/RelationRepository';
import type { TRelation } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const relations: Relations = await RelationRepository.getRelations();
	if (relations.relationsArray.length === 0) {
		throw error(404, { message: 'Relations not found' });
	}
	const serializedRelations: TRelation[] = RelationFormatter.toPOJOs(relations.relationsArray);
	return {
		relations: serializedRelations
	};
};