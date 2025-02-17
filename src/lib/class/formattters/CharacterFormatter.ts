import type { Character } from '../Character';

export class CharacterFormatter {
	public static toPOJO(character: Character) {
		return {
			id: character.id,
			firstName: character.firstName,
			lastName: character.lastName,
		};
	}

	public static toPOJOs(characters: readonly Character[]) {
		return characters.map(character => this.toPOJO(character));
	}

	// public static getFullName(character: Character): string {
	// 	return `${character.firstName} ${character.lastName}`;
	// }

	// public static POJOfullName(character: Character) {
	// 	return {
	// 		id: character.id,
	// 		firstName: character.firstName,
	// 		lastName: character.lastName,
	// 		fullName: this.getFullName(character)
	// 	};
	// }
}
