import { graphviz } from 'd3-graphviz';
//TODO: wdg GPT mogę zrobić 'npm install --save-dev @types/d3-graphviz', bo krzyczy o any
import type { Character, Relation } from '$lib/types/types';

function getCharacterName(characterId: number, characters: Character[]): string {
	const character = characters.find((char) => char.id === characterId);
	return character
		? `${character.firstName ?? 'Unknown'} ${character.lastName ?? 'Unknown'}`
		: 'Unknown';
}

export function drawGraph(relations: Relation[], characters: Character[]): void {
	let diag = '';
	for (const relation of relations) {
		const firstCharName = getCharacterName(relation.idChar1, characters);
		const secondCharName = getCharacterName(relation.idChar2, characters);
		const relShip = relation.about;
		diag += `"${firstCharName}"->"${secondCharName}" [label="${relShip}"];`;
	}
	graphviz('#graph').renderDot('digraph {' + diag + '}');
}