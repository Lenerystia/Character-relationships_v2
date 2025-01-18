import type { Relations } from '$lib/class/Relations';
import type { TRelation } from '$lib/types/types';

import { RelationFormatter } from '$lib/class/formattters/RelationFormatter';
import { EMPTY } from '$lib/constants';
import { RelationRepository } from '$lib/server/repositories/RelationRepository';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';


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