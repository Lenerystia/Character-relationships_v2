import type { Character } from '../Character';

export class CharacterFormatter {
	static toPOJO(character: Character) {
		return {
			id: character.id,
			firstName: character.firstName,
			lastName: character.lastName
		};
	}

	static toPOJOs(characters: Character[]) {
		return characters.map(this.toPOJO);
	}

	static getFullName(character: Character): string {
		return `${character.firstName} ${character.lastName}`;
	}

	static POJOfullName(character: Character) {
		return {
			id: character.id,
			firstName: character.firstName,
			lastName: character.lastName,
			fullName: this.getFullName(character)
		};
	}
}
