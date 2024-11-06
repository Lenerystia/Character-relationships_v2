import { fetchAllCharacters } from '$lib/server/db/queries';
import type { TCharacter } from '$lib/types/types';

export const load = async () => {
	const characters: TCharacter[] = await fetchAllCharacters();
	return {
		characters
	};
};
