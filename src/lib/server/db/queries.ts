import { db } from "$lib/server/db";
import { characters } from "$lib/server/db/schema";

export async function fetchAllCharacters() {
    const char = await db.select().from(characters);
    return char;
}