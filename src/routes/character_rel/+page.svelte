<script lang="ts">
  import '$lib/scripts/app.css';

  import type { TCharacter, TRelation } from '$lib/types/types';

  import { onMount } from 'svelte';

  export let data: {
    characters: TCharacter[];
    relations: TRelation[];
  };

  let characters = data.characters;
  let relations = data.relations;

  // Helper functions
  function getRelationsForCharacter(characterId: number): TRelation[] {
    return relations.filter((rel: TRelation) => rel.idChar1 === characterId);
  }

  function getRelatedCharacter(relatedCharacterId: number): TCharacter[] {
    return characters.filter((char: TCharacter) => char.id === relatedCharacterId);
  }

	// onMount(() => {
	// 	drawGraph(relations, characters);
	// });
</script>

<main>
	<div id="left">
		<h1>Relations between character</h1>
		<div>
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
		</div>
	</div>
	<div id="svg">
		<svg id="graph" width="1050px" height="1000px" />
	</div>
</main>
