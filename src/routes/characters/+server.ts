import CharacterRepository from '$lib/server/repositories/CharacterRepository';
import { error, type RequestHandler } from '@sveltejs/kit';

export const DELETE: RequestHandler = async ({ request }):Promise<Response> => {
	const { id } = await request.json();

	if (!id || typeof id !== 'number') {
		throw error(400, { message: 'Invalid or missing character ID' });
	}

	const response = await CharacterRepository.deleteCharacterById(id);
	if (!response.ok) {
		return response
		// throw error(500, { message: 'Error deleting character' });
	}
	//return json({ message: 'Character deleted successfully' });
	return new Response('Character deleted successfully', { status: 200 });
};
