import { db } from '$lib/server/db';
import { characters } from '$lib/server/db/schema';
import { describe, it, expect } from 'vitest';

describe('sum test', () => {
	it('adds 1 + 2 to equal 3', () => {
		expect(1 + 2).toBe(3);
	});
});

// src/lib/server/db/db.test.ts  // Adjust the import path as necessary

describe('Database Connection', () => {
    it('should connect to the database', async () => {
        // You might want to do a simple query to verify the connection
        const result = await db.select().from(characters).limit(1);  // Replace 'some_table' with an actual table in your database
        expect(result).toBeDefined();
    });
});
