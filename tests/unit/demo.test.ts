// import { db } from '$lib/server/db';
// import { characters } from '$lib/server/db/schema';
import { beforeEach, describe, expect, it, vi } from 'vitest';

// vi.mock('$lib/server/db/index', () => ({
//     db: {
//         select: vi.fn().mockReturnValue({
//             from: vi.fn().mockReturnValue({
//                 limit: vi.fn().mockResolvedValue([
//                     { id: 1, firstName: 'Test', lastName: 'Test' }
//                 ])
//             })
//         })
//     },
// }));

// Reset modules and apply mocks before each test
beforeEach(() => {
	vi.resetModules();
	vi.mock('$env/dynamic/private', () => ({
		env: { DATABASE_URL: 'postgres://test' } // Mock DATABASE_URL here
	}));
});

describe('Database Connection', () => {
	it('should instantiate the database object', async () => {
		const { db } = await import('$lib/server/db'); // Import after mock
		expect(db).toBeDefined();
	});

	it('should throw an error if DATABASE_URL is not set', async () => {
		vi.mock('$env/dynamic/private', () => ({ env: {} })); // Mock missing DATABASE_URL
		await expect(() => import('$lib/server/db')).rejects.toThrowError('DATABASE_URL is not set');
	});
});

describe('fetchCharacter', () => {
	it('should return the character data', async () => {
		const asyncMock = vi.fn().mockResolvedValue(42);

		await asyncMock(); // 42
	});
});

//TODO: test - co kiedy user poda nieistniejące id
//no powinno ładnie wywalić, że nie ma takiej postaci
// it('character id not exist - show message/error', () => {
//     expect(db).
// })

// it('should instantiate the database object', () => {
//     expect(db).toBeDefined();
// });
// it('should have the characters table schema defined', () => {
//     expect(characters).toBeDefined();
// });

// it('should connect to the database', async () => {
//     const result = await db.select().from(characters);
//     expect(result).toBeDefined();
// });
// //TODO: sprawdzić czy jak więcej danych zamockuje czy test się wyłoży
// it('should fetch data from the database', async () => {
//     const result = await db.select().from(characters).limit(1);
//     expect(result).toEqual([{ id: 1, firstName: 'Test', lastName: 'Test' }]);
// });
// });
