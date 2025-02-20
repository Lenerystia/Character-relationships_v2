import type { Relationship } from '../class/Relationship';

export class RelationshipFormatter {
	public static toPOJO(relation: Relationship) {
		return {
			id: relation.id,
			idChar1: relation.idChar1,
			idChar2: relation.idChar2,
			about: relation.about,
		};
	}

	public static toPOJOs(relations: readonly Relationship[]) {
		return relations.map(relation => this.toPOJO(relation));
	}

	public static toString(relation: Relationship): string {
		return `"${relation.idChar1}" -> "${relation.idChar2}" [label="${relation.about}"];`;
	}

	// static formattedRelation(relation: Relation): string {
	//   		return `"${relation.idChar1.fullName}" -> "${relation.idChar2.fullName}" [label="${this.about}"];`;
	//   	}
}
