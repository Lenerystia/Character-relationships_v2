import type { TCharacter } from '$lib/types/types';

import CharacterRepository from '$lib/server/repositories/CharacterRepository';

export const load = async () => {
	const characters: TCharacter[] = await CharacterRepository.getListCharacters();
	return {
		characters
	};
};
