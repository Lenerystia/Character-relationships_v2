import CharacterModel from '$lib/server/model/CharacterModel';
import type { TCharacter } from '$lib/types/types';

export const load = async () => {
	const characters: TCharacter[] = await CharacterModel.getListCharacters();
	return {
		characters
	};
};
