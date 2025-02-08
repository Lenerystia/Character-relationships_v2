import type { Relationship } from "../Relationship";

export class RelationFormatter {
    static toPOJO(relation: Relationship) {
      return {
        id: relation.id,
        idChar1: relation.idChar1,  
        idChar2: relation.idChar2,
        about: relation.about
      };
    }

    static toPOJOs(relations: Relationship[]) {
      return relations.map(this.toPOJO);
    }

    // static formattedRelation(relation: Relation): string {
    //   		return `"${relation.idChar1.fullName}" -> "${relation.idChar2.fullName}" [label="${this.about}"];`;
    //   	}
      
  }
  