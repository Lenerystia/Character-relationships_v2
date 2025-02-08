import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const characters = pgTable('characters', {
	id: serial('id').primaryKey(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
});

export const relations = pgTable('relations', {
	id: serial('id').primaryKey(),
	idChar1: serial('id_char_1').references(() => characters.id),
	idChar2: serial('id_char_2').references(() => characters.id),
	about: text('about').notNull(),
});



// import { sql } from 'drizzle-orm';
// import { boolean, pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
//
// // ======= Tabela Postaci =======
// export const characters = pgTable('characters', {
// 	id: uuid('id').defaultRandom().primaryKey(),
// 	firstName: varchar('first_name', { length: 100 }).notNull(),
// 	lastName: varchar('last_name', { length: 100 }).notNull(),
// 	description: text('description'),
// 	tags1: text('tags1')
// 		.array()
// 		.default(sql`'{}'::text[]`),
// });
//
// // ======= Tabela Uniwersów =======
// export const universes = pgTable('universes', {
// 	id: uuid('id').defaultRandom().primaryKey(),
// 	name: varchar('name', { length: 255 }).notNull(),
// 	description: text('description'),
// });
//
// // TODO: ======= Powiązanie Postaci z Uniwersami (Many-to-Many) =======
//
// // ======= Tabela Relacji =======
// export const relationships = pgTable('relationships', {
// 	id: uuid('id').defaultRandom().primaryKey(),
// 	sourceId: uuid('source_id')
// 		.references(() => characters.id, { onDelete: 'cascade' })
// 		.notNull(),
// 	targetId: uuid('target_id')
// 		.references(() => characters.id, { onDelete: 'cascade' })
// 		.notNull(),
// 	about: text('about').notNull(),
// 	isBidirectional: boolean('is_bidirectional').default(false),
// });
//
// // ======= Tabela Opowiadań =======
// export const stories = pgTable('stories', {
// 	id: uuid('id').defaultRandom().primaryKey(),
// 	title: varchar('title', { length: 255 }).notNull(),
// 	content: text('content').notNull(),
// 	characterId: uuid('character_id')
// 		.references(() => characters.id, { onDelete: 'cascade' })
// 		.notNull(),
// });
