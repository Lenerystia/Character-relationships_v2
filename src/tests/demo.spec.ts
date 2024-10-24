import { db } from '$lib/server/db';
import { characters } from '$lib/server/db/schema';
import { describe, it, expect, vi } from 'vitest';

//TODO: Analyse this - what GPT throw
//TODO - Yeah, these comments are also questions for you - Dr. H.
// vi.mock('$lib/server/db/index', () => ({
//     db: {
//         select: vi.fn().mockReturnValue({
//             from: vi.fn().mockReturnValue({
//                 limit: vi.fn().mockResolvedValue([{ id: 1, firstName: 'Test', lastName: 'Test' }]) // Mocking return value of limit
//             })
//         })
//     },
// }));

vi.mock('$lib/server/db/index', () => ({
    db: {
        connect: vi.fn().mockResolvedValue(true), // Simulate connection success
    },
}));


describe('Database Connection', () => {
    //TODO: test - co kiedy user poda nieistniejące id 
    //TODO: do tego - jeśli wywalę env to ten test się wywali - if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
    //TODO: 
    it('should instantiate the database object', () => {
        expect(db).toBeDefined();
    });
    //TODO Testing schema? I don't know. Is that a good idea?
    it('should have the characters table schema defined', () => {
        expect(characters).toBeDefined(); // Ensure the schema is loaded properly
    });

    //TODO: Should I in some way mock te query? Need I test db with some query??
    // it('should connect to the database', async () => {
    //     const result = await db.select().from(characters).limit(1);
    //     expect(result).toBeDefined();
    // });
    // it('should fetch data from the database', async () => {
    //     const result = await db.select().from(characters).limit(1);  // Testing fetch
    //     expect(result).toEqual([{ id: 1, firstName: 'Test', lastName: 'Test' }]); // Check if it returns mocked data
    // });
});
