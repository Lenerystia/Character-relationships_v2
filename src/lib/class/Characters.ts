import { Character } from '$lib/class/Character';

export class Characters {
	constructor(public charactersArray: Character[]) {}

	getCharacterById(characterId: number, characters: Character[]): Character {
		const character: Character = characters.find((char: Character) => char.id === characterId)
	?? (() => { throw new Error(`Character with ID ${characterId} not found`); })();
		return character;
	}


	// 	function getCharacterName(characterId: number, characters: Character[]): string {
	// 	const character = characters.find((char) => char.id === characterId);
	// 	//TODO Dlaczego on się tu wydziera o undefined?
	// 	return character
	// 		? `${character.firstName} ${character.lastName}`
	// 		: 'Unknown';
	// }
}
