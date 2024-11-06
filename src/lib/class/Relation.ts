import type { Character } from '$lib/class/Character';

export class Relation {
	constructor(
		public readonly idChar1: Character,
		public readonly idChar2: Character,
		public readonly about: string
	) {
	}

	get formattedRelation(): string {
		return `"${this.idChar1.fullName}" -> "${this.idChar2.fullName}" [label="${this.about}"];`;
	}

	// toJSON() {
	// 	return {
	// 		idChar1: this.idChar1,
	// 		idChar2: this.idChar2,
	// 		about: this.about,
	// 		formattedRelation: this.formattedRelation
	// 	};
	// }
}