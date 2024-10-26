CREATE TABLE IF NOT EXISTS "characters" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text,
	"last_name" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "relations" (
	"id" serial PRIMARY KEY NOT NULL,
	"id_char_1" serial NOT NULL,
	"id_char_2" serial NOT NULL,
	"about" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "relations" ADD CONSTRAINT "relations_id_char_1_characters_id_fk" FOREIGN KEY ("id_char_1") REFERENCES "public"."characters"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "relations" ADD CONSTRAINT "relations_id_char_2_characters_id_fk" FOREIGN KEY ("id_char_2") REFERENCES "public"."characters"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
