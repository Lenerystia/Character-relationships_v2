import { db } from '$lib/server/db';
import { characters, relations } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

export async function fetchAllCharacters() {
	const chars = await db.select().from(characters).orderBy(characters.id);
	return chars;
}

export async function fetchAllRelations() {
	const rel = await db.select().from(relations).orderBy(relations.id);
	return rel;
}

export async function fetchCharacterTest(
	db: PostgresJsDatabase<Record<string, never>>,
	compared: number
) {
	const char = await db.select().from(characters).where(eq(characters.id, compared));
	return char;
}
export async function fetchCharacter(compared: number) {
	return fetchCharacterTest(db, compared);
}
