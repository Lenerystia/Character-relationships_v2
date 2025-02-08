// import type { Character } from '$lib/class/Character';

export class Relationship {
	constructor(
		public readonly id: number,
		public readonly idChar1: number,
		public readonly idChar2: number,
		public readonly about: string,
	) {}
}
