import { relations } from '$lib/server/db/schema';


export function drawDiag() {
	let diag: string = '';
	for (let i = 0; i < relations.length; i++) {
		const firstCharName = relations[i]['idChar1'];
		const secondCharName = relations[i]['idChar2'];
		const relShip = relations[i]['about'];
		diag += `"${firstCharName}"->"${secondCharName}" [label="${relShip}"];`;
	}
}

drawDiag();
