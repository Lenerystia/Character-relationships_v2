import { fetchAllCharacters } from '$lib/server/db/queries';
import type { Character } from '$lib/types/types';

export const load = async () => {
	const characters: Character[] = await fetchAllCharacters();
	return {
		characters
	};
};
