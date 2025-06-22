import { Character } from '$lib/class/Character';
import { Characters } from '$lib/class/Characters';
import db from '$lib/server/db';
import { characterNames, characters } from '$lib/server/db/schema/schema';
import { eq } from 'drizzle-orm';
import { CharacterNames } from '$lib/class/CharacterNames';

class CharacterRepository {
	static async getCharacters(): Promise<Characters> {
		const rows = await db
			.select({
				id: characters.id,
				lastName: characters.lastName,
				name: characterNames.name,
			})
			.from(characters)
			.leftJoin(characterNames, eq(characterNames.characterId, characters.id));

		const grouped = new Map<number, { lastName: string | null; names: (string | null)[] }>();

		for (const row of rows) {
			if (!grouped.has(row.id)) {
				grouped.set(row.id, { lastName: row.lastName, names: [] });
			}
			grouped.get(row.id)!.names.push(row.name ?? null);
		}

		const characterInstances = Array.from(grouped.entries()).map(([id, { lastName, names }]) => {
			const nonNullNames = names.filter((n): n is string => typeof n === 'string');
			return new Character(id, new CharacterNames(nonNullNames), lastName);

		});

		return new Characters(characterInstances);
	}

	// TODO - take framework to responses status codes or finally
	public static async deleteCharacterById(id: number): Promise<Response> {
		try {
			await db.delete(characters).where(eq(characters.id, id));

			return new Response('Character deleted successfully', { status: 200 });
		} catch {
			return new Response('Error deleting character!', { status: 500 });
		}
	}
}

export default CharacterRepository;
