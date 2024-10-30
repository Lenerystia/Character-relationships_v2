import { fetchAllCharacters, fetchAllRelations } from '$lib/server/db/queries';
import type { Character, Relation } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export async function load() {
	const characters: Character[] = await fetchAllCharacters();
	const relations: Relation[] = await fetchAllRelations();
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