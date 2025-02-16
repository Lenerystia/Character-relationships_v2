import { Relationship } from '$lib/class/Relationship';
import { Relationships } from '$lib/class/Relationships';
import db from '$lib/server/db';
import { relations } from '$lib/server/db/schema/schema';
import { eq } from 'drizzle-orm';

export class RelationRepository {
  /**
   * Retrieves all relations in the database and returns them as an array of Relation objects.
   * The relations are ordered by their IDs in ascending order.
   * @returns A promise that resolves to an array of Relation objects.
   */
  public static async getListRelations(): Promise<Relationship[]> {
    return db.select().from(relations).orderBy(relations.id);
  }
  
  /**
   * Retrieves all relations in the database and returns them as an instance of the Relations class.
   * This is useful when you need to access the methods of the Relations class.
   * @returns {Promise<Relationships>} A promise that resolves to the Relations instance.
   */
  public static async getRelations() : Promise<Relationships> {
    const relationRecords = await db.select().from(relations).orderBy(relations.id);
    return new Relationships(
      relationRecords.map(
        (rel): Relationship => new Relationship(rel.id, rel.idChar1, rel.idChar2, rel.about)
      )
    );
  }

  /**
   * Retrieves a relation by its ID.
   * @param relationId The ID of the relation to retrieve.
   * @returns A promise that resolves to the Relation object.
   */
  public static async getRelationById(relationId: number): Promise<Relationship> {
    const relationRecord = await db.query.relations.findFirst({
      where: eq(relations.id, relationId),
    });
    if (relationRecord == null) {
      throw new Error('Relation not found');
    }
    return relationRecord;
  }
}

// export default RelationRepository;