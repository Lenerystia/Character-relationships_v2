import type { ICharacter } from '$lib/interfaces/interfaces';

import CharacterRepository from '$lib/server/repositories/CharacterRepository';

export const load = async () => {
	const characters: ICharacter[] = await CharacterRepository.getListCharacters();
	return {
		characters
	};
};
