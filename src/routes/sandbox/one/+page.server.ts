import type { Relationship } from '$lib/class/Relationship';

import { Character } from '$lib/class/Character';
import { Formatter } from '$lib/class/formattters/Formatter';

import { fetchCharacters, fetchRelations } from '../server/queries';

export const load = async () => {// fetchCharactersClass
	const characters: Character[] = await fetchCharacters();
	const relations: Relationship[] = await fetchRelations();
	const formatter = new Formatter(characters, relations);

	const fullName = formatter.getFullNameInitiatorCharacter(relations[0]);

	return {
		fullName
	};
};
