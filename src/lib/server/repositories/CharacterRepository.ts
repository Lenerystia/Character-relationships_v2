import { Character } from '$lib/class/Character';
import { Characters } from '$lib/class/Characters';
import db from '$lib/server/db';
import { characters } from '$lib/server/db/schema/schema';
import { eq } from 'drizzle-orm';

class CharacterRepository {
	/**
	 * Retrieves all characters in the database and returns them as an array of Character objects.
	 * The characters are ordered by their IDs in ascending order.
	 * @returns A promise that resolves to an array of Character objects.
	 */
	static async getListCharacters(): Promise<Character[]> {
		return await db.select().from(characters).orderBy(characters.id);
	}

	/**
	 * Retrieves all characters and returns them as an instance of the Characters class.
	 * This is useful when you need to access the methods of the Characters class.
	 * @returns {Promise<Characters>} A promise that resolves to the Characters instance.
	 */
	static async getCharacters(): Promise<Characters> {
		const characterRecords = await db.select().from(characters).orderBy(characters.id);
		//mapper
		const charactersArray = characterRecords.map(
			(char): Character => new Character(char.id, char.firstName, char.lastName)
		);
		return new Characters(charactersArray);
	}

	/**
	 * Retrieves a character by their ID
	 * @param id The ID of the character to retrieve
	 * @returns A single Character object
	 */
	static async getCharacterById(id: number): Promise<Character> {
		let characterRecord = await db.query.characters.findFirst({
			where: eq(characters.id, id)
		});
		if (!characterRecord) {
			throw new Error('Character not found');
		}
		return characterRecord;
	}

	/**
	 * Deletes a character from the database by their ID.
	 * @param id The ID of the character to delete
	 * @returns A promise that resolves to a Response object with a status code of 200 if successful, or a status code of 500 if an error occurs.
	 */
	// TODO - take framework to responses status codes or finally
	static async deleteCharacterById(id: number): Promise<Response> {
		try {
			await db.delete(characters).where(eq(characters.id, id));
			return new Response('Character deleted successfully', { status: 200 });
		} catch (error) {
			console.error('Error deleting character:', error);
			return new Response('Error deleting character!', { status: 500 });
		}
	}
}

export default CharacterRepository;
