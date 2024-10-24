import { db } from "$lib/server/db";
import { characters, relations } from "$lib/server/db/schema";
import { sql, eq } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";

//TODO: Why I repeat myself? - change it to parameter - dla zaoszczędzenia 2 linijek nie warto
export async function fetchAllCharacters() {
    const char = await db.select().from(characters);
    return char;
}

export async function fetchAllRelations() {
    const rel = await db.select().from(relations);
    return rel;
}
//TODO: albo wyciągać id - dać to widokowi i niech widok o potrzebne dane bije się do db, by przekazać użytkownikowi takie informacje jakie potrzebuje - dlaczego view miałby mieć dostęp do bazy?
//TODO: adapter - na wejściu ID, na wyjściu - json z informacjami które potrzebuje w takim formacie w jakim je potrzebuje - osobne metodki, które zwrócą co trzeba
//TODO: LUB pełen pakiet informacji, niech widok sobie wyciągnie/ albo dać wszystko i zostawić widokowi do pokazania co potrzebuje
//paginacja danych - page, podzielenie na paczki - np. 50 osób na stronę
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