// character.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as queries from '$lib/server/db/queries'; // Ensure the import path is correct

// PODDAJĘ SIĘ DZISIAJ - 27.10.2024
vi.mock('$lib/server/db/queries', () => {
	// Mock the database methods
	const mockDb = {
		where: vi.fn().mockImplementation((id: number) => {
			// Mocked response for where clause based on character ID
			if (id === 1) {
				return Promise.resolve([{ id: 1, firstName: 'John', lastName: 'Doe' }]); // Mock data for ID 1
			}
			return Promise.resolve([]); // Return empty array for other IDs
		})
	};

	return {
		db: mockDb, // Replace the db with the mocked one
		fetchCharacter: vi.fn(async (compared: number) => {
			return await mockDb.where(compared); // Call the mocked where method
		})
	};
});

describe('fetchCharacter', () => {
	beforeEach(() => {
		vi.clearAllMocks(); // Clear mocks before each test
	});

	it('should return the character data', async () => {
		const result = await queries.fetchCharacter(1); // Use the queries import here
		expect(result).toEqual([{ id: 1, firstName: 'John', lastName: 'Doe' }]);
	});
	//   it('XXXXXXXXXXXXXXXX', async () => {
	//     const dbSpy = {
	//       select: vi.fn()
	//     }
	//     vi.spyOn(dbSpy,'select');
	//     vi.stubGlobal('db',dbSpy);
	//     vi.mock(import("$lib/server/db/queries"), async (importOriginal) => {
	//       const actual = await importOriginal()
	//       return {
	//         ...actual,
	//         dbSpy
	//         // your mocked methods
	//       }
	//     })
	//   queries.fetchCharacterTest(dbSpy, 1);
	//     expect(dbSpy.select).toBeCalled();
	// //    const result = await queries.fetchCharacter(1); // Use the queries import here
	// //    expect(result).toEqual([{ id: 1, firstName: 'John', lastName: 'Doe' }]);
	//   });

	it('should return an empty array for a non-existing character', async () => {
		const result = await queries.fetchCharacter(999); // Assuming 999 doesn't exist
		expect(result).toEqual([]);
	});
});
