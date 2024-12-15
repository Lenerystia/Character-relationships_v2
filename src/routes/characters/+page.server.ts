import CharacterModel from '$lib/server/model/CharacterModel';
import type { TCharacter } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const characters: TCharacter[] = await CharacterModel.getListCharacters();
	if (characters.length === 0) {
		throw error(404, { message: 'Characters not found' });
	}
	return {
		characters
	};
};
