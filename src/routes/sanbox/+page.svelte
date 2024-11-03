<script lang="ts">
	import Navigate from '$lib/components/Navigate.svelte';
	import '$lib/scripts/app.css';
	import type { Character } from '$lib/types/types';

	export let data: { result: Character[] };
	let AllCharacters = data.result;
</script>

<h1>Character List</h1>
{#if AllCharacters && AllCharacters.length > 0}
	<div>
		<table>
			<thead>
				<tr>
					{#each Object.keys(AllCharacters[0]) as colHead}
						<th>{colHead}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each AllCharacters as character}
					<tr>
						{#each Object.values(character) as cell}
							<td>{cell}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<p>No characters found.</p>
{/if}

<Navigate />
