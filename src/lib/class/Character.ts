import type { CharacterNames } from '$lib/class/CharacterNames';

export class Character {
	public constructor(
		public readonly id: number,
		public readonly names: CharacterNames,
		public readonly lastName: string,
	) {}
}
