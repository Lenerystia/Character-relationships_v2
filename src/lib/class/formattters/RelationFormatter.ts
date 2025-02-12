import type { Relationship } from '../Relationship';

export class RelationFormatter {
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
		return `${relation.idChar1} -> ${relation.idChar2} [label="${relation.about}"];`;
	}

	// private static formattedRelation(relation: Relationship): string {
	// 	return `"${relation.idChar1.fullName}" -> "${relation.idChar2.fullName}" [label="${this.about}"];`;
	// }
}
