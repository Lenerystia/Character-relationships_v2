<script lang="ts">
	import Navigate from '../../lib/components/Navigate.svelte';
	import '$lib/scripts/app.css';
	import type { Relation } from '$lib/types/types';

	export let data: { relations: Relation[] };
	let relations = data.relations;
</script>

<h1>Relationship List</h1>

<div>
	<table>
		<thead>
			<tr>
				<th>Relationship ID</th>
				<th>ID First Character</th>
				<th>ID Second Character</th>
				<th>About Relation</th>
			</tr>
		</thead>
		<tbody>
			{#each relations as relation}
				<tr>
					{#each Object.values(relation) as cell}
						<td>{cell}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<br />
<Navigate />
