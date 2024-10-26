import { db } from "$lib/server/db";
import { characters, relations } from "$lib/server/db/schema";

//TODO: Why I repeat myself? - change it to parameter - dla zaoszczędzenia 2 linijek nie warto
export async function fetchAllCharacters() {
    const chars = await db.select().from(characters);
    return chars;
}

export async function fetchAllRelations() {
    const rel = await db.select().from(relations);
    return rel;
}
//TODO: get id - give it to view and view ask db for necessary data - which user need  - why view should have connection with db?
//TODO: adapter - input ID, output - json z informacjami które potrzebuje w takim formacie w jakim je potrzebuje - osobne metodki, które zwrócą co trzeba
//TODO: LUB pełen pakiet informacji, niech widok sobie wyciągnie/albo dać wszystko i zostawić widokowi do pokazania co potrzebuje
//paginacja danych - page, podzielenie na paczki - np. 50 osób na stronę