import { fetchAllCharacters, fetchAllRelations } from '$lib/server/db/queries';
import type { TCharacter, TRelation } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export async function load() {
	const characters: TCharacter[] = await fetchAllCharacters();
	const relations: TRelation[] = await fetchAllRelations();
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