import type { ICharacter } from '$lib/interfaces/interfaces';
import type { LoadEvent } from '@sveltejs/kit';

import { EMPTY } from '$lib/constants';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

import { fetchCharacter } from '../../sandbox/server/queries.js';


// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export async function load({ params }: LoadEvent) {
	{
		if (params.charId === '' || params.charId === undefined) {
			throw error(StatusCodes.BAD_REQUEST, {
				message: 'Missing character ID!'
			});
		}

		const paramsCharacterId: string = params.charId;

		const characterId: number = parseInt(paramsCharacterId);
		if (isNaN(characterId) || !(/^\d+$/.test(paramsCharacterId))) {
			throw error(StatusCodes.BAD_REQUEST, {
				message: `Character ID must be a number from 1 to ${Number.MAX_SAFE_INTEGER}`
			});
		}
		// TODO method canParseToInt
		const NO_CHARACTERS = 0;
		// TODO: NO_CHARACTERS extract to constants
		//TODO: isCharacterValid extract to functions
		if (characterId <= NO_CHARACTERS || characterId > Number.MAX_SAFE_INTEGER) {
			throw error(StatusCodes.BAD_REQUEST, {
				message: `Character ID must be a number from 1 to ${Number.MAX_SAFE_INTEGER}`
			});
		}
		const character: ICharacter[] = await fetchCharacter(characterId);
		if (character.length === EMPTY) {
			throw error(StatusCodes.NOT_FOUND, { message: 'Character not found' });
		}
		return {
			character
		};
	}
}
