import { integer, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const characters = pgTable('characters', {
	id: serial('id').primaryKey(),
	lastName: text('last_name')
});

export const characterNames = pgTable('character_names', {
	id: serial('id').primaryKey(),
	characterId: integer('character_id')
		.references(() => characters.id, { onDelete: 'cascade' }), // FK + usuwanie kaskadowe
	name: text(),
});

export const relations = pgTable('relations', {
	id: serial('id').primaryKey(),
	idChar1: serial('id_char_1').references(() => characters.id).notNull(),
	idChar2: serial('id_char_2').references(() => characters.id).notNull(),
	about: text('about').notNull(),
});
