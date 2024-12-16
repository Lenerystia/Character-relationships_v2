import type { Character } from "./Character";

export class CharacterFormatter {
    // Metoda konwertująca instancję Character na POJO
    static toPOJO(character: Character) {
      return {
        id: character.id,
        firstName: character.firstName,
        lastName: character.lastName
      };
    }
    // Metoda konwertująca tablicę instancji Character na tablicę POJO
    static toPOJOs(characters: Character[]) {
        return characters.map(this.toPOJO);
    }

    static getfullName(character: Character): string {
		return `${character.firstName} ${character.lastName}`;
	}
    
    static POJOfullName(character: Character) {
        return {
            id: character.id,
            firstName: character.firstName,
            lastName: character.lastName,
            fullName: this.getfullName(character)
        };
    }
  }
  