import { db } from '$lib/server/db';
import { characters, relations } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export async function fetchAllCharacters() {
	return db.select().from(characters).orderBy(characters.id);
}

export async function fetchAllRelations() {
	return db.select().from(relations).orderBy(relations.id);
}

export async function fetchCharacterTest(
	db: PostgresJsDatabase<Record<string, never>>,
	compared: number
) {
	return db.select().from(characters).where(eq(characters.id, compared));
}
export async function fetchCharacter(compared: number) {
	return fetchCharacterTest(db, compared);
}