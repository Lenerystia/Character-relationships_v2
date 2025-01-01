import type { Characters } from '$lib/class/Characters';
import { CharacterFormatter } from '$lib/class/formattters/CharacterFormatter';
import CharacterRepository from '$lib/server/repositories/CharacterRepository';
import type { TCharacter } from '$lib/types/types';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const characters: Characters = await CharacterRepository.getCharacters();
	if (characters.charactersArray.length === 0) {
		throw error(404, { message: 'Characters not found' });
	}
	
	const serializedCharacters: TCharacter[] = CharacterFormatter.toPOJOs(characters.charactersArray);
	return {
		characters: serializedCharacters,
	};
};
