import { db } from '$lib/server/db';
import { characterNames, characters } from '$lib/server/db/schema/schema';
import { CharacterNames } from '$lib/class/CharacterNames';
import { error, type RequestHandler } from '@sveltejs/kit';
import { StatusCodes } from 'http-status-codes';

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();
	const rawNames = formData.getAll('firstName');
	const lastName = formData.get('lastName');

	if (
		(!rawNames.every(x=>x === null || typeof x === 'string')) ||
		(lastName !== null && typeof lastName !== 'string')
	) {
		throw new TypeError('Invalid form data');
	}

	const firstNames = rawNames.map(x => (typeof x === 'string' && x.trim() !== '' ? x : null));

	const hasAtLeastOneFirstName = firstNames.some(name => name !== null);
	const hasLastName = typeof lastName === 'string' && lastName.trim().length > 0;

	if (!hasAtLeastOneFirstName && !hasLastName) {
		throw error(StatusCodes.BAD_REQUEST, {
			message: 'Musisz podać przynajmniej jedno imię lub nazwisko.',
		});
	}

	const [createdCharacter] = await db
		.insert(characters)
		.values({
			lastName: hasLastName ? lastName : null,
		})
		.returning();

	await db.insert(characterNames).values(
		firstNames.map((name) => ({
			characterId: createdCharacter.id,
			name: name, // null or string
		}))
	);

	return new Response('Character added successfully', { status: 200 });
};
