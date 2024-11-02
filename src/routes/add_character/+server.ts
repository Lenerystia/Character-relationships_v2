import { db } from '$lib/server/db'; // Make sure your database connection is set up here
import { characters } from '$lib/server/db/schema';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }: { request: Request }) => {
	try {
		const data = await request.formData();
		const firstName = data.get('firstName') as string;
		const lastName = data.get('lastName') as string;

		if (!firstName || !lastName) {
			return new Response('Missing character name', { status: 400 });
		}

		// Insert into database
		await db.insert(characters).values({
			firstName,
			lastName,
		});

		return new Response('Character added successfully', { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response('Error adding character', { status: 500 });
	}
};
