import { deleteCharacterById } from '$lib/server/db/queries';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const DELETE: RequestHandler = async ({ request }) => {
	const { id } = await request.json();

	if (!id || typeof id !== 'number') {
		throw error(400, { message: 'Invalid or missing character ID' });
	}

	const success = await deleteCharacterById(id);
	if (!success) {
		throw error(500, { message: 'Error deleting character' });
	}
	return json({ message: 'Character deleted successfully' });
	//return new Response('Character deleted successfully', { status: 200 });
	//TODO: Czym te dwa się różnią?
};
