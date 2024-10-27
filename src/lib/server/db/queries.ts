import { db } from "$lib/server/db";
import { characters, relations } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";

export async function fetchAllCharacters() {
    const chars = await db.select().from(characters);
    return chars;
}

export async function fetchAllRelations() {
    const rel = await db.select().from(relations);
    return rel;
}

export async function fetchCharacter(compared: number) {
    const char = await db.select().from(characters).where(eq(characters.id, compared));
    return char;
}
