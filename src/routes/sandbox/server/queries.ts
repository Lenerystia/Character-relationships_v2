import { db } from '$lib/server/db';
import { characters, relations } from '$lib/server/db/schema/schema';
import { eq } from 'drizzle-orm';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { Character } from '$lib/class/Character';
import { Relation, Relations } from '$lib/class/Relation';
import type { TCharacter } from '$lib/types/types';
import { Characters } from '$lib/class/Characters';

export async function fetchCharacterTest(
	db: PostgresJsDatabase<Record<string, never>>,
	compared: number
): Promise<TCharacter[]> {
	return db.select().from(characters).where(eq(characters.id, compared));
}
export async function fetchCharacter(compared: number) {
	return fetchCharacterTest(db, compared);
}

//src/routes/characters/+server.ts
// export async function deleteCharacterById(id: IId) : Promise<Response> {
// 	try {
// 		await db.delete(characters).where(eq(characters.id, id.id));
// 		return new Response('Character deleted successfully', { status: 200 });
// 	} catch (error) {
// 		console.error("Error deleting character:", error);
// 		// return json({ message: 'Error deleting character!', status: 500 });
// 		return new Response('Error deleting character!', { status: 500 });
// 	}
// }


//Testing "OOP" with help GPT
//TODO zrobić jednak klasę Characters, a tam umieścić (pierw znaleźć) getCharacterById i zwrócić wszystkie informacje o postaci
export async function fetchCharacters(): Promise<Character[]> {
	const characterRecords = await db.select().from(characters).orderBy(characters.id);
	return characterRecords.map(
		(char): Character => new Character(char.id, char.firstName, char.lastName)
	);
}

export async function fetchCharactersClass(): Promise<Characters> {
	const characterRecords = await db.select().from(characters).orderBy(characters.id);
	const charactersArray = characterRecords.map(
		(char): Character => new Character(char.id, char.firstName, char.lastName)
	);
	return new Characters(charactersArray);
}

/**
 * Fetches all relation records from the database.
 *
 * @returns {Promise<Relation[]>} A promise that resolves to an array of Relation objects.
 */
export async function fetchRelations(): Promise<Relation[]> {
	const relationRecords = await db.select().from(relations);
	return relationRecords.map(
		(rel): Relation => new Relation(rel.id, rel.idChar1, rel.idChar2, rel.about)
	);
}

//like line 67
export async function fetchRelationsClass(): Promise<Relations> {
	const relationRecords = await db.select().from(relations).orderBy(relations.id);
	return new Relations(
		relationRecords.map(
			(rel): Relation => new Relation(rel.id, rel.idChar1, rel.idChar2, rel.about)
		)
	);
}

// Nie ważne
// export async function fetchRelations(): Promise<Relation[]> {
// 	const relationRecords = await db.select().from(relations);
// 	return relationRecords.map((rel):Relation => new Relation(rel.id, rel.idChar1, rel.idChar2, rel.about)
// 	);
// }
