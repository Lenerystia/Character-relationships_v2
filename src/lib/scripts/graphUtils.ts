import type { Character } from '$lib/class/Character';
import type { Relationship } from '$lib/class/Relationship';

import { graphviz } from 'd3-graphviz';

import { RelationFormatter } from '$lib/class/formattters/RelationFormatter';
import { fetchCharacters, fetchRelations } from '../../routes/sandbox/server/queries';

// function getCharacterName(characterId: number, characters: Character[]): string {
// 	const character = characters.find((char) => char.id === characterId);
// 	//TODO Dlaczego on się tu wydziera o undefined?
// 	return character
// 		? `${character.firstName} ${character.lastName}`
// 		: 'Unknown';
// }
//
// export function drawGraph(relations: TRelation[], characters: TCharacter[]): void {
// 	let diag = '';
// 	for (const relation of relations) {
// 		//TODO: Czy tu obiekty nie poprawią jakości kodu
// 		const firstCharName = getCharacterName(relation.idChar1, characters);
// 		const secondCharName = getCharacterName(relation.idChar2, characters);
// 		// Rozdzieliłam sztucznie informacje o osobie od relacji - według promotora
// 		// id od firstName i od relacji - to wszystko oddzielone
// 		// Jak kuźwa, to co mam walnąć jedna tabelę, gdzie będą wszystkie informacje? Kuchnia mać no jak niby miałam to łączyć?
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
	//relation.first + relation.char + relation.name
	// relation = relations.getRelationOf(id)
	const diag = relations.map(relation => RelationFormatter.toString(relation)).join(' ');

	graphviz('#graph').renderDot(`digraph { ${diag} }`);
}

export async function renderGraph(): Promise<void> {
	const charactersArray = await fetchCharacters();
	const charactersMap = new Map<number, Character>();
	charactersArray.forEach(char => charactersMap.set(char.id, char));

	const formattedRelations = await fetchRelations();
	drawGraph(formattedRelations);
}
