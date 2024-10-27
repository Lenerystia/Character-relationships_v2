<script lang="ts">
    import Navigate from "../../lib/components/Navigate.svelte";
    import '$lib/scripts/app.css'
    import type { Character, Relation } from "$lib/types/types";

    export let data: { characters: Character[]; relations: Relation[] };

    let characters = data.characters;
    let relations = data.relations;

    // Helper functions
    function getRelationsForCharacter(characterId: number): Relation[] {
        return relations.filter((rel: Relation) => rel.idChar1 === characterId);
    }
    function getRelatedCharacter(reletedCharacterId: number): Character[] {
        return characters.filter((char: Character) => char.id === reletedCharacterId);
    }
</script>

<h1>Relations between character</h1>

{#if characters && relations}
    <table>
        <thead>
            <tr>
                <th>Character Name</th>
                <th>Related Character</th>
                <th>About Relationship</th>
            </tr>
        </thead>
        <tbody>
            {#each characters as character}
                {#each getRelationsForCharacter(character.id) as relation}
                    <tr>
                        <td>
                            {#if character.firstName}{character.firstName}{:else}Unknown{/if} 
                            {#if character.lastName}{character.lastName}{:else}Unknown{/if}
                        </td>
                        <td>
                            {#each getRelatedCharacter(relation.idChar2) as relatedCharacter}
                                {#if relatedCharacter.firstName}{relatedCharacter.firstName}{:else}Unknown{/if} 
                                {#if relatedCharacter.lastName}{relatedCharacter.lastName}{:else}Unknown{/if}
                            {/each}
                        </td>
                        <td>{relation.about}</td>
                    </tr>
                {/each}
            {/each}
        </tbody>
    </table>
{:else}
    <p>Loading data...</p>
{/if}

<br>
<Navigate />