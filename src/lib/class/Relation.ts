// import type { Character } from '$lib/class/Character';

export class Relation {
	constructor(
		public readonly id: number,
		public readonly idChar1: number,
		public readonly idChar2: number,
		public readonly about: string
	) {
	}
//TODO - nie mieszaj responibility - wywal do innej klasy jeśli już - jakiś formatter relation
// ej, może IFormatter - i wtedy formater dla relation, dla characterów i potem dla innych rzeczy

// 	get formattedRelation(): string {
// 		return `"${this.idChar1.fullName}" -> "${this.idChar2.fullName}" [label="${this.about}"];`;
// 	}

	toJSON() {
		return {
			id: this.id,
			idChar1: this.idChar1,
			idChar2: this.idChar2,
			about: this.about,
		};
	}
}

export class Relations {
	constructor(readonly relations: Relation[]) {}
}