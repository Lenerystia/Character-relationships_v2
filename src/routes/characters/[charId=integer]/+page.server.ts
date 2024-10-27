import { characters } from '$lib/server/db/schema';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

// export const load: PageServerLoad = (async ({params}) => {
//     const pageCharacterId = (params as {characterId: string}).characterId;
//     const parsePageCharacterIdToInt = parseInt(pageCharacterId);
//     const result = await db.select().from(characters).where(eq(characters.id, parsePageCharacterIdToInt));
//     return {
//        result
//    };
// })


export const load: PageSeverLoad = async ({ params }) => {
  const charId = params.charId;
  
  // Assume you have a function `fetchCharacter` that retrieves character data from the DB.
  const character = await fetchCharacter(charId);
  
  if (!character) {
    throw new Error("Character not found");
  }

  return { character };
};

async function fetchCharacter(charId: number) {
    const char = await db.select().from(characters).where(eq(characters.id, charId));
    return char;
}

