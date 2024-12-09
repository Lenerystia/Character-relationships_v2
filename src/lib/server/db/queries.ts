import { db } from '$lib/server/db';
import { characters, relations } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { Character } from '$lib/class/Character';
import { Relation } from '$lib/class/Relation';
import type { TCharacter } from '$lib/types/types';
import { Characters } from '$lib/class/Characters';

export async function fetchAllCharacters() {
	return db.select().from(characters).orderBy(characters.id);
}

export async function fetchAllRelations() {
	return db.select().from(relations).orderBy(relations.id);
}

export async function fetchCharacterTest(
	db: PostgresJsDatabase<Record<string, never>>,
	compared: number
): Promise<TCharacter[]> {
	const results: TCharacter[] = await db
		.select()
		.from(characters)
		.where(eq(characters.id, compared));

	return results;
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

//TODO - ze zdjęcia wziąć biblioteczkę do tych responów
// i albo stałe i się zobaczy
export async function deleteCharacterById(id: number): Promise<Response> {
	try {
		await db.delete(characters).where(eq(characters.id, id));
		return new Response('Character deleted successfully', { status: 200 });
	} catch (error) {
		console.error('Error deleting character:', error);
		//return json({ message: 'Error deleting character!', status: 500 });
		return new Response('Error deleting character!', { status: 500 });
	}
}

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
	console.log('Fetched records:', characterRecords);
	const charactersArray = characterRecords.map(
		(char): Character => new Character(char.id, char.firstName, char.lastName)
	);
	console.log('Character instances:', charactersArray);
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


//Nie ważne
// export async function fetchRelations(): Promise<Relation[]> {
// 	const relationRecords = await db.select().from(relations);
// 	return relationRecords.map((rel):Relation => new Relation(rel.id, rel.idChar1, rel.idChar2, rel.about)
// 	);
// }



