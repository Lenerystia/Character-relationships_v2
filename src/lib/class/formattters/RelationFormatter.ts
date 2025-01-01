import type { Relation } from "../Relation";

export class RelationFormatter {
    // Metoda konwertująca instancję Character na POJO
    static toPOJO(relation: Relation) {
      return {
        id: relation.id,
        idChar1: relation.idChar1,  
        idChar2: relation.idChar2,
        about: relation.about
      };
    }
  
    // Metoda konwertująca tablicę instancji Character na tablicę POJO
    static toPOJOs(relations: Relation[]) {
      return relations.map(this.toPOJO);
    }

    // static formattedRelation(relation: Relation): string {
    //   		return `"${relation.idChar1.fullName}" -> "${relation.idChar2.fullName}" [label="${this.about}"];`;
    //   	}
      
  }
  