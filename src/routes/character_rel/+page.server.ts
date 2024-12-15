import CharacterModel from '$lib/server/model/CharacterModel';
import { RelationModel } from '$lib/server/model/RelationModel';
import type { TCharacter, TRelation } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export async function load() {
	const characters: TCharacter[] = await CharacterModel.getListCharacters();
	const relations: TRelation[] = await RelationModel.getListRelations();
	if (characters.length === 0) {
		throw error(404, { message: 'Are you sure you have characters?' });
	}
	if (relations.length === 0) {
		throw error(404, { message: 'Relations not found' });
	}
	return {
		characters,
		relations
	};
}