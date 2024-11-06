import { fetchAllCharacters } from '$lib/server/db/queries';
import type { TCharacter } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const characters: TCharacter[] = await fetchAllCharacters();
	if (characters.length === 0) {
		throw error(404, { message: 'Characters not found' });
	}
	return {
		characters
	};
};
