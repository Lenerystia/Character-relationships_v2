import type { Characters } from '$lib/class/Characters';

import { EMPTY } from '$lib/constants';
import CharacterRepository from '$lib/server/repositories/CharacterRepository';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const characters: Characters = await CharacterRepository.getCharacters();
	if (characters.charactersArray.length == EMPTY) {
		throw error(StatusCodes.NOT_FOUND, { message: 'Characters not found' });
	}

	return {
		characters: structuredClone(characters.charactersArray),
	};
};
