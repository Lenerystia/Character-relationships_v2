import { error } from '@sveltejs/kit';
import { Characters } from '$lib/class/Characters';
import { Relations } from '$lib/class/Relations';
import { CharacterFormatter } from '$lib/class/CharacterFormatter';
import { RelationFormatter } from '$lib/class/RelationFormatter';
import CharacterModel from '$lib/server/model/CharacterModel';
import { RelationModel } from '$lib/server/model/RelationModel';
import type { TCharacter, TRelation } from '$lib/types/types';

export async function load() {
  // Fetch data from the database
  const characters: Characters = await CharacterModel.getCharacters();
  const relations: Relations = await RelationModel.getRelations();

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
