import type { TCharacter, TRelation } from '$lib/types/types';

import { Characters } from '$lib/class/Characters';
import { CharacterFormatter } from '$lib/class/formattters/CharacterFormatter';
import { RelationFormatter } from '$lib/class/formattters/RelationFormatter';
import { Relations } from '$lib/class/Relations';
import CharacterRepository from '$lib/server/repositories/CharacterRepository';
import { RelationRepository } from '$lib/server/repositories/RelationRepository';
import { error } from '@sveltejs/kit';

export async function load() {
	// Fetch data from the database
	const characters: Characters = await CharacterRepository.getCharacters();
	const relations: Relations = await RelationRepository.getRelations();

	// Check if the data is empty and throw an error if so
	if (characters.charactersArray.length === 0) {
		throw error(404, { message: 'Are you sure you have characters?' });
	}
	if (relations.relationsArray.length === 0) {
		throw error(404, { message: 'Relations not found' });
	}

	// Convert the instances of Characters and Relations to plain objects
	const serializedCharacters: TCharacter[] = CharacterFormatter.toPOJOs(characters.charactersArray);
	const serializedRelations: TRelation[] = RelationFormatter.toPOJOs(relations.relationsArray);

	// Return the serialized data
	return {
		characters: serializedCharacters,
		relations: serializedRelations
	};
}
