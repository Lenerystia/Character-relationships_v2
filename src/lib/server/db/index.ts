import * as schema from '$lib/server/db/schema/schema';
import env from '@src/env';
import { drizzle } from 'drizzle-orm/postgres-js';
// import { env } from '$env/dynamic/private';
// if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
// const client = postgres(env.DATABASE_URL);
// export const db = drizzle( client, { casing: 'snake_case' })
// await migrate(db, {migrationsFolder: "./../../../../drizzle"});
// import { migrate } from 'drizzle-orm/node-postgres/migrator';
import postgres from 'postgres';

const CONNECTION_LIMIT = 1;
// TODO: CONNECTION LIMIT separate file with const's
export const connection = postgres(env.DATABASE_URL, {
	max: (env.DB_MIGRATING || env.DB_SEEDING) ? CONNECTION_LIMIT : undefined,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onnotice: env.DB_SEEDING ? () => {} : undefined,
});

export const db = drizzle(connection, {
	casing: 'snake_case',
	schema,
	logger: true,
});

// export type db = typeof db;

export default db;
