export class Character {
	constructor(
		public readonly id: number,
		public readonly firstName: string,
		public readonly lastName: string
	) {}
//TODO - teoretycznie pobieranie full name charactera, z pól firstName i lastName - to powinien chyba view się tym zajmować o ile dobrze pamiętam
// nie widzę by nie pasiło do tej klasy
// 	get fullName(): string {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
	//prawdopodobnie widok jednak powinine się tym zająć
	// toJSON() {
	// 	return {
	// 		id: this.id,
	// 		firstName: this.firstName,
	// 		lastName: this.lastName,
	// 		// fullName: this.fullName
	// 	};
	// }
}