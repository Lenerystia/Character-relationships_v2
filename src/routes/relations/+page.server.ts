import type { Relationships } from '$lib/class/Relationships';
import type { TRelation } from '$lib/types/types';

import { RelationFormatter } from '$lib/class/formattters/RelationFormatter';
import { EMPTY } from '$lib/constants';
import { RelationRepository } from '$lib/server/repositories/RelationRepository';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';


export const load = async () => {
	const relations: Relationships = await RelationRepository.getRelations();
	if (relations.relationsArray.length === EMPTY) {
		throw error(StatusCodes.NOT_FOUND, { message: 'Relations not found' });
	}
	const serializedRelations: TRelation[] = RelationFormatter.toPOJOs(relations.relationsArray);
	return {
		relations: serializedRelations,
	};
};

//
//
//
// export const load = async () => {
// 	const relations: Relations = await RelationRepository.getRelations();
//
// 	if (relations.relationsArray.length === EMPTY) {
// 		return {
// 			error: 'Relations not found',
// 			status: StatusCodes.NOT_FOUND,
// 		};
// 	}
//
// 	const serializedRelations: TRelation[] = RelationFormatter.toPOJOs(relations.relationsArray);
// 	return {
// 		data: {
// 			relations: serializedRelations,
// 		},
// 		status: StatusCodes.OK,
// 	};
// };
//
//
//
//
// ----------------------
// export const load = async () => {
// 	const relations: Relations = await RelationRepository.getRelations();
//
// 	if (relations.relationsArray.length === EMPTY) {
// 		return { error: new Error('Relations not found') };
// 	}
//
// 	const serializedRelations: TRelation[] = RelationFormatter.toPOJOs(relations.relationsArray);
// 	return {
// 		value: serializedRelations,
// 	};
// };
