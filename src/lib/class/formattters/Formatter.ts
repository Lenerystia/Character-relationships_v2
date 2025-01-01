import { Relation } from '$lib/class/Relation';
import type { Character } from '$lib/class/Character';

export class Formatter {
	constructor(public readonly characters: Character[], public readonly Relation: Relation[]) {}
	//TODO - odpowiedzialna za jedną rzecz, za to robi to dobrze
	// wróć się do celu - dlaczego stworzyłeś te klasę? Sklejanie łańcucha do graphviza
	// więc czemu tu getujesz?
	// Osobna klasa na te wyciąganie informacji do tego? - Yes
	// A może nie trzeba formattera i wystarczy w widoku - już tak było

	// function getRelationsForCharacter(characterId: number): TRelation[] {
	// 	return relations.filter((rel: TRelation) => rel.idChar1 === characterId);
	// }

	// getFullNameIniciatorCharacter(character: Character[], relations: Relation[]) {
	// 	const IniciatorCharacterName = relations.filter((rel: Relation) => rel.idChar1 === character.id);
	// 	return `${IniciatorCharacterName}`;
	// }

	getFullNameInitiatorCharacter(relation: Relation): string | null {
		const initiator = this.characters.find(
			(char) => char.id === relation.idChar1
		);
		if (initiator) {
			return `${initiator.firstName} ${initiator.lastName}`;
		}
		return null;
	}

	// getFullNameRelatedCharacter(character: Character, relations: Relation[]) {
	// 	const relatedCharacterName = relations.filter((rel: Relation) => rel.idChar1 === character.id);
	// 	return `${relatedCharacterName}`;
	// }

	// getFormattedRelationOneSided(characters: Character[], relations: Relation[]): string {
	// 	return `"${this.getFullNameIniciatorCharacter(characters, relations)}" -> "${this.getFullNameRelatedCharacter}" [label="${relations.about}"];`;
	// }
	// getFormattedRelationDoubleSided(relation: Relation): string {
	// 	return `"${relation.getFullNameIniciatorCharacter}" <-> "${relation.getFullNameRelatedCharacter}" [label="${relation.about}"];`;
	// }
}
