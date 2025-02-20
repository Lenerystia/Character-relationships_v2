import type { Character } from '$lib/class/Character';
import type { Relationship } from '$lib/class/Relationship';

import { RelationshipFormatter } from '$lib/formattters/RelationshipFormatter';
import { fetchCharacters, fetchRelations } from '@routes/sandbox/server/queries';
import { graphviz } from 'd3-graphviz';

// function getCharacterName(characterId: number, characters: Character[]): string {
// 	const character = characters.find((char) => char.id === characterId);
// 	//TODO Why is it yelling here about undefined?
// 	return character
// 		? `${character.firstName} ${character.lastName}`
// 		: 'Unknown';
// }
//
// export function drawGraph(relations: TRelation[], characters: TCharacter[]): void {
// 	let diag = '';
// 	for (const relation of relations) {
// 		//TODO: Wouldn't objects improve the quality of the code here?
// 		const firstCharName = getCharacterName(relation.idChar1, characters);
// 		const secondCharName = getCharacterName(relation.idChar2, characters);
// 		// I artificially divided the information about a person from the relationship - according to the promoter
// 		// id from firstName and from relationships - all this is separated
// 		// How come, don't I have to hit one table where all the information will be? Kitchen has no idea how I was supposed to combine this?
// 		const relShip = relation.about;
// 		diag += `"${firstCharName}"->"${secondCharName}" [label="${relShip}"];`;
// 	}
// 	graphviz('#graph').renderDot('digraph {' + diag + '}');
// }
// const charactersMap = new Map<number, Character>();
// characters.forEach((char) => charactersMap.set(char.id, new Character(char.id, char.firstName, char.lastName)));
//
// const formattedRelations = relations.map(
// 	(rel) => new Relation(
// 		charactersMap.get(rel.idChar1)!,
// 		charactersMap.get(rel.idChar2)!,
// 		rel.about
// 	)
// );

export function drawGraph(relations: readonly Relationship[]): void {
	// diag += `"${firstCharName}"->"${secondCharName}" [label="${relShip}"];`;
	// relation.first + relation.char + relation.name
	// relation = relations.getRelationOf(id)
	const diag = relations.map(relationShip => RelationshipFormatter.toString(relationShip)).join(' ');

	graphviz('#graph').renderDot(`digraph { ${diag} }`);
}

export async function renderGraph(): Promise<void> {
	const charactersArray = await fetchCharacters();
	const charactersMap = new Map<number, Character>();
	charactersArray.forEach(char => charactersMap.set(char.id, char));

	const formattedRelations = await fetchRelations();
	drawGraph(formattedRelations);
}
