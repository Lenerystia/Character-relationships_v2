import { fetchCharacters, fetchRelations } from '../server/queries';
import { Character } from '$lib/class/Character';
import { Formatter } from '$lib/class/formattters/Formatter';
import type { Relation } from '$lib/class/Relation';

export const load = async () => {// fetchCharactersClass
	const characters: Character[] = await fetchCharacters();
	const relations: Relation[] = await fetchRelations();
	const formatter = new Formatter(characters, relations);

	const fullName = formatter.getFullNameInitiatorCharacter(relations[0]);

	return {
		fullName
	};
};
