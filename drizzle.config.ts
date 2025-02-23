import type { Config } from 'drizzle-kit';
import { defineConfig } from 'drizzle-kit';
import env from './src/env';
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	out: './dev/drizzle',

	dbCredentials: {
		url: env.DATABASE_URL,
	},
	introspect: {
		casing: 'camel',
	},
	verbose: true,
	strict: true,
	dialect: 'postgresql',
}) satisfies Config;
