import type { Character } from '$lib/class/Character';

export class Characters {
	// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
	public constructor(public charactersArray: Character[]) {}

	// getCharacterById(characterId: number, characters: Character[]): Character {
	// 	return (
	// 		characters.find((char: Character) => char.id === characterId) ??
	// 		(() => {
	// 			throw new Error(`Character with ID ${characterId} not found`);
	// 		})()
	// 	);
	// }
}
