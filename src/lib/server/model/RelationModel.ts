import { Relation } from '$lib/class/Relation';
import { Relations } from '$lib/class/Relations';
import db from '$lib/server/db';
import { relations } from '$lib/server/db/schema/schema';
import { eq } from 'drizzle-orm';

export class RelationModel {
  /**
   * Retrieves all relations in the database and returns them as an array of Relation objects.
   * The relations are ordered by their IDs in ascending order.
   * @returns A promise that resolves to an array of Relation objects.
   */
  static async getListRelations() : Promise<Relation[]> {
    return db.select().from(relations).orderBy(relations.id);
  }
  
  /**
   * Retrieves all relations in the database and returns them as an instance of the Relations class.
   * This is useful when you need to access the methods of the Relations class.
   * @returns {Promise<Relations>} A promise that resolves to the Relations instance.
   */
  static async getRelations() : Promise<Relations> {
    const relationRecords = await db.select().from(relations).orderBy(relations.id);
    return new Relations(
      relationRecords.map(
        (rel): Relation => new Relation(rel.id, rel.idChar1, rel.idChar2, rel.about)
      )
    );
  }

  /**
   * Retrieves a relation by its ID.
   * @param id The ID of the relation to retrieve.
   * @returns A promise that resolves to the Relation object.
   */
  static async getRelationById(id: number): Promise<Relation> {
    const relationRecord = await db.query.relations.findFirst({
      where: eq(relations.id, id),
    });
    if (!relationRecord) {
      throw new Error('Relation not found');
    }
    return relationRecord;
  }
  

}

// export default RelationModel;