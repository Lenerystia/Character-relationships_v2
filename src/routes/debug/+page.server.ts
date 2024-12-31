import CharacterRepository from '$lib/server/repositories/CharacterRepository';
import type { TCharacter } from '$lib/types/types';

export const load = async () => {
	const characters: TCharacter[] = await CharacterRepository.getListCharacters();
	return {
		characters
	};
};
