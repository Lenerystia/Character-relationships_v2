import { fetchCharactersClass } from '$lib/server/db/queries';
import { Characters } from '$lib/class/Characters';

export const load = async () => {
	const charactersInstance: Characters = await fetchCharactersClass();

	const plainCharacters = charactersInstance.charactersArray.map((char) => ({
		id: char.id,
		firstName: char.firstName,
		lastName: char.lastName
	}));
	console.log('Plain characters:', plainCharacters);

	return {
		characters: plainCharacters
	};
};
