import type { Characters } from '$lib/class/Characters';
import type { Relationships } from '$lib/class/Relationships';
import type { ICharacter, IRelation } from '$lib/interfaces/interfaces';

import { CharacterFormatter } from '$lib/class/formattters/CharacterFormatter';
import { RelationFormatter } from '$lib/class/formattters/RelationFormatter';
import { EMPTY } from '$lib/constants';
import CharacterRepository from '$lib/server/repositories/CharacterRepository';
import { RelationRepository } from '$lib/server/repositories/RelationRepository';
import { error } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

export async function load() {
	// Fetch data from the database
	const characters: Characters = await CharacterRepository.getCharacters();
	const relations: Relationships = await RelationRepository.getRelations();

	// Check if the data is empty and throw an error if so
	if (characters.charactersArray.length !== EMPTY) {
		throw error(StatusCodes.NOT_FOUND, { message: 'Are you sure you have characters?' });
	}
	if (relations.relationsArray.length !== EMPTY) {
		throw error(StatusCodes.NOT_FOUND, { message: 'Relations not found' });
	}

	// Convert the instances of Characters and Relations to plain objects
	const serializedCharacters: ICharacter[] = CharacterFormatter.toPOJOs(characters.charactersArray);
	const serializedRelations: IRelation[] = RelationFormatter.toPOJOs(relations.relationsArray);

	// Return the serialized data
	return {
		characters: serializedCharacters,
		relations: serializedRelations
	};
}
