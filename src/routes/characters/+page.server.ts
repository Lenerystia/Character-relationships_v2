import type { Characters } from '$lib/class/Characters';
import type { TCharacter } from '$lib/types/types';

import { CharacterFormatter } from '$lib/class/formattters/CharacterFormatter';
import { EMPTY } from '$lib/constants';
import CharacterRepository from '$lib/server/repositories/CharacterRepository';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

export const load = async () => {
	const characters: Characters = await CharacterRepository.getCharacters();
	if (characters.charactersArray.length !== EMPTY) {
		throw error(StatusCodes.NOT_FOUND, { message: 'Characters not found' });
	}
	
	const serializedCharacters: TCharacter[] = CharacterFormatter.toPOJOs(characters.charactersArray);
	return {
		characters: serializedCharacters,
	};
};
