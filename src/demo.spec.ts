import { db } from '$lib/server/db';
import { characters } from '$lib/server/db/schema';
import { describe, it, expect, vi } from 'vitest';

describe('sum test (testing tests)', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });
});

// Mocking the db object before the tests -
//TODO: Analyse this - what GPT throw
vi.mock('$lib/server/db/index', () => ({
    db: {
        select: vi.fn().mockReturnValue({
            from: vi.fn().mockReturnValue({
                limit: vi.fn().mockResolvedValue([{ id: 1, firstName: 'Test', lastName: 'Test' }]) // Mocking return value of limit
            })
        })
    },
}));

describe('Database Connection', () => {
    it('should connect to the database', async () => {
        const result = await db.select().from(characters).limit(1);  // Testing connection
        expect(result).toBeDefined();
    });

    it('should fetch data from the database', async () => {
        const result = await db.select().from(characters).limit(1);  // Testing fetch
        expect(result).toEqual([{ id: 1, firstName: 'Test', lastName: 'Test' }]); // Check if it returns mocked data
    });
});
