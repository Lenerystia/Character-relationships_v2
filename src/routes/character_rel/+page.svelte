<script lang="ts">
	import Navigate from '../../lib/components/Navigate.svelte';
	import '$lib/scripts/app.css';
	import type { Character, Relation } from '$lib/types/types';
	import { onMount } from 'svelte';
	import { graphviz } from 'd3-graphviz';

	export let data: {
		characters: Character[];
		relations: Relation[];
	};

	let characters = data.characters;
	let relations = data.relations;
	let diag: string = '';
	// Helper functions
	function getRelationsForCharacter(characterId: number): Relation[] {
		return relations.filter((rel: Relation) => rel.idChar1 === characterId);
	}
	function getRelatedCharacter(relatedCharacterId: number): Character[] {
		return characters.filter((char: Character) => char.id === relatedCharacterId);
	}

	for (let i = 0; i < relations.length; i++) {
		const firstCharName = relations[i]['idChar1'];
		const secondCharName = relations[i]['idChar2'];
		const relShip = relations[i]['about'];
		diag += `"${firstCharName}"->"${secondCharName}" [label="${relShip}"];`;
	}

	onMount(() => {
		graphviz('#graph').renderDot('digraph {' + diag + '}');
	});
</script>

<main>
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
	<div id="svg">
		<svg id="graph" width="1050px" height="1000px" />
	</div>

	<br />
	<Navigate />
</main>
