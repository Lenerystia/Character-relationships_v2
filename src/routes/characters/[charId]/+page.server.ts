import { fetchCharacter } from '$lib/server/db/queries.js';
import { error } from '@sveltejs/kit';
import type { TCharacter } from '$lib/types/types';


export async function load({ params }) {
	// TODO method canParseToInt
	const paramsCharacterId: string = params.charId;
	const characterId: number = parseInt(paramsCharacterId);
	//TODO To nie ma sensu - bo testować mogę tylko stringa, a isNaN to już musi być sprawdzany numer
	//Do diabła z tym niech będzie tak
	if (isNaN(characterId) || !(/^\d+$/.test(paramsCharacterId))) {
		throw error(400, {
			message: 'Character ID must be a number from 1 to ' + Number.MAX_SAFE_INTEGER
		});
	}
	//TODO: isCharacterValid extract to functions
	if (characterId <= 0 || characterId > Number.MAX_SAFE_INTEGER) {
		throw error(400, {
			message: 'Character ID must be a number from 1 to ' + Number.MAX_SAFE_INTEGER
		});
	}
	const character: TCharacter[] = await fetchCharacter(characterId);
	if (character.length === 0) {
		throw error(404, { message: 'Character not found' });
	}
	return {
		character
	};
}
