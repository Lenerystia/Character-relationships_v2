import type { TCharacter } from '$lib/types/types';

import { EMPTY } from '$lib/constants';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { fetchCharacter } from '../../sandbox/server/queries.js';


export async function load({ params }) {
	// TODO method canParseToInt
	const paramsCharacterId: string = params.charId;
	const characterId: number = parseInt(paramsCharacterId);
	if (isNaN(characterId) || !(/^\d+$/.test(paramsCharacterId))) {
		throw error(StatusCodes.BAD_REQUEST, {
			message: 'Character ID must be a number from 1 to ' + Number.MAX_SAFE_INTEGER
		});
	}
	//TODO: isCharacterValid extract to functions
	if (characterId <= 0 || characterId > Number.MAX_SAFE_INTEGER) {
		throw error(StatusCodes.BAD_REQUEST, {
			message: 'Character ID must be a number from 1 to ' + Number.MAX_SAFE_INTEGER
		});
	}
	const character: TCharacter[] = await fetchCharacter(characterId);
	if (character.length === EMPTY) {
		throw error(StatusCodes.NOT_FOUND, { message: 'Character not found' });
	}
	return {
		character
	};
}
