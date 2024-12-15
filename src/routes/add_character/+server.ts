import { db } from '$lib/server/db';
import { characters } from '$lib/server/db/schema/schema';
import { error, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }: { request: Request }) => {
		const formData = await request.formData();
		const firstName = formData.get('firstName') as string;
		const lastName = formData.get('lastName') as string;

		if (!firstName || !lastName) {
			throw error(400, { message: 'Missing character name' });
		}
		//TODO: One any properties is required - whatever which one
		
		await db.insert(characters).values({
			firstName,
			lastName
		});

		return new Response('Character added successfully', { status: 200 });
};