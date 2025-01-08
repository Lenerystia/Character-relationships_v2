import type { Relations } from '$lib/class/Relations';
import type { TRelation } from '$lib/types/types';

import { RelationFormatter } from '$lib/class/formattters/RelationFormatter';
import { RelationRepository } from '$lib/server/repositories/RelationRepository';
import { StatusCodes } from 'http-status-codes';
import { EMPTY } from '$lib/constants';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const relations: Relations = await RelationRepository.getRelations();
	if (relations.relationsArray.length === EMPTY) {
		throw error(StatusCodes.NOT_FOUND, { message: 'Relations not found' });
	}
	const serializedRelations: TRelation[] = RelationFormatter.toPOJOs(relations.relationsArray);
	return {
		relations: serializedRelations
	};
};