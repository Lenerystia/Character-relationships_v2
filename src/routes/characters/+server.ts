import { deleteCharacterById } from '$lib/server/db/queries';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const DELETE: RequestHandler = async ({ request }) => {
	try {
		const { id } = await request.json();

		if (!id || typeof id !== 'number') {
			throw error(400, { message: 'Invalid or missing character ID' });
		}

		const success = await deleteCharacterById(id);
		if (!success) {
			throw error(404, { message: 'Character not found' });
		}
		return json({ message: 'Character deleted successfully' });
	} catch (err) {
		console.error(err);
		throw error(500, { message: 'Error deleting character' });
	}
};
