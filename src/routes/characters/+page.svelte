<script lang="ts">
	import Navigate from '$lib/components/Navigate.svelte';
	import '$lib/scripts/app.css';
	import type { Character } from '$lib/types/types';

	export let data: { characters: Character[] };
	let characters = data.characters;
	//TODO: cell - change name to something sensible
</script>

<h1>Character List</h1>
<div>
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>First Name</th>
				<th>Last Name</th>
			</tr>
		</thead>
		<tbody>
			{#each characters as character}
				<tr>
					{#each Object.values(character) as cell}
						<td>{cell}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<Navigate />
