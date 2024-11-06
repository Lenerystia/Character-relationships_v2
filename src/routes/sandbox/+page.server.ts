import { fetchCharacters } from '$lib/server/db/queries';
import { error } from '@sveltejs/kit';
import { Character } from '$lib/class/Character';

export const load = async () => {
	const characters: Character[] = await fetchCharacters();
	if (characters.length === 0) {
		throw error(404, { message: 'Characters not found' });
	}

	//TODO nie rozumiem
	//TODO [UPDATE] chyba rozumiem, JS jest debilem
	//"Podczas przesyłania danych do frontendu w load, SvelteKit oczekuje danych w formacie JSON,
	// a obiekty klasy Character nie są automatycznie serializowane
	// (trzeba przekazać tylko zwykłe obiekty JavaScript)."

	// Convert Character instances to plain objects - double mapping
	// const characterData = characters.map((char) => ({
	// 	id: char.id,
	// 	firstName: char.firstName,
	// 	lastName: char.lastName,
	// 	fullName: char.fullName // assuming fullName is a getter in Character class
	// }));
	//
	// return {
	// 	characters: characterData
	// };

	//Żeby uniknąć podwójnego formatowania na froncie
	//TODO: Czy to jest cholera jasna po prostu pisanie serializera? (w C# ostatnio z tym walczyłam)
	return {
		characters: characters.map((char) => char.toJSON())
	};
};
