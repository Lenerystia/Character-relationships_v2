export class Character {
	constructor(
		public readonly id: number,
		public readonly firstName: string,
		public readonly lastName: string
	) {}

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
	toJSON() {
		return {
			id: this.id,
			firstName: this.firstName,
			lastName: this.lastName,
			fullName: this.fullName
		};
	}
}