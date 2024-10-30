import { fetchAllCharacters } from '$lib/server/db/queries';
import type { Character } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const characters: Character[] = await fetchAllCharacters();
	if (characters.length === 0) {
		throw error(404, { message: 'Characters not found' });
	}
	return {
		characters
	};
};
