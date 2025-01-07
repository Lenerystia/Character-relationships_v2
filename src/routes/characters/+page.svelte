<script lang="ts">
	import '$lib/scripts/app.css';

	import type { TCharacter } from '$lib/types/types';

	import { goto } from '$app/navigation';

	export let data: { characters: TCharacter[] };
	let characters = data.characters;

	export async function deleteCharacter(id: number) {
		if (confirm('Are you sure you want to delete this character?')) {
			const response = await fetch('/characters', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ id })
			});
			if (response.ok) {
				goto('/characters', { replaceState: true });
				window.location.reload();
			} else {
				const errorData = await response.json();
				alert(`Failed to delete character: ${errorData.message}`);
			}
		}
	}
</script>

<h1>Character List</h1>
<div>
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each characters as character (character.id)}
				<tr>
					<td>{character.id}</td>
					<td>{character.firstName}</td>
					<td>{character.lastName}</td>
					<td><button type="button" on:click={() => deleteCharacter(character.id)}>Delete</button></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
