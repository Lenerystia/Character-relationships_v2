import type { Character } from '$lib/class/Character';
import type { Relationship } from '$lib/class/Relationship';

export class Formatter {
	public constructor(
		public readonly characters: readonly Character[],
		public readonly Relation: readonly Relationship[],
	) {}
	//TODO - odpowiedzialna za jedną rzecz, za to robi to dobrze
	// wróć się do celu - dlaczego stworzyłeś te klasę? Sklejanie łańcucha do graphviza
	// więc czemu tu getujesz?
	// Osobna klasa na te wyciąganie informacji do tego? - Yes
	// A może nie trzeba formattera i wystarczy w widoku - już tak było

	// function getRelationsForCharacter(characterId: number): TRelation[] {
	// 	return relations.filter((rel: TRelation) => rel.idChar1 === characterId);
	// }

	// getFullNameInitiatorCharacter(character: Character[], relations: Relation[]) {
	// 	const InitiatorCharacterName = relations.filter((rel: Relation) => rel.idChar1 === character.id);
	// 	return `${InitiatorCharacterName}`;
	// }

	public getFullNameInitiatorCharacter(relation: Relationship): null | string {
		const initiator = this.characters.find(char => char.id === relation.idChar1);
		if (initiator !== null) {
			return `${initiator.firstName} ${initiator.lastName}`;
		}
		return null;
	}

	// getFullNameRelatedCharacter(character: Character, relations: Relation[]) {
	// 	const relatedCharacterName = relations.filter((rel: Relation) => rel.idChar1 === character.id);
	// 	return `${relatedCharacterName}`;
	// }

	// getFormattedRelationOneSided(characters: Character[], relations: Relation[]): string {
	// 	return `"${this.getFullName	InitiatorCharacter(characters, relations)}" -> "${this.getFullNameRelatedCharacter}" [label="${relations.about}"];`;
	// }
	// getFormattedRelationDoubleSided(relation: Relation): string {
	// 	return `"${relation.getFullNameInitiatorCharacter}" <-> "${relation.getFullNameRelatedCharacter}" [label="${relation.about}"];`;
	// }
}
