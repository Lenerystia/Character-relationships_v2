import { db } from "$lib/server/db";
import { characters, relations } from "$lib/server/db/schema";
import { sql, eq } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";

export async function fetchAllCharacters() {
    const char = await db.select().from(characters);
    return char;
}

export async function fetchAllRelations() {
    const rel = await db.select().from(relations);
    return rel;
}

export async function fetchCharacterRelatedWithSecondCharacter(){
    const characters2 = alias(characters, "characters2")
    const CharacterRelatedWithSecondCharacter = await db.select({
        'idFirstChar': characters.id,
        'idSecondChar': characters2.id,
        'First Character': sql`CONCAT(${characters.firstName}, ' ',${characters.lastName} )`,
        'Second Character': sql`CONCAT(${characters2.firstName}, ' ',${characters2.lastName} )`,
        'About relationship': relations.about,
    })
    .from(relations)
    .innerJoin(characters, eq(characters.id, relations.idChar1))
    .innerJoin(characters2, eq(characters2.id, relations.idChar2));
   return CharacterRelatedWithSecondCharacter
}