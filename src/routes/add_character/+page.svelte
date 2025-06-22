<script lang="ts">
	import '$lib/scripts/app.css';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let names: string[] = [''];
	let lastName = '';
	let errorMessage = '';

	function addName() {
		names.push('');
	}
	function removeFirstName(index: number) {
		names.splice(index, 1);
	}

	const handleSubmit = async (event: Event): Promise<void> => {
		event.preventDefault();

		const formData = new FormData();
		for (const name of names) {
			formData.append('firstName', name); // 🆕 wiele pól 'firstName'
		}
		formData.append('lastName', lastName);

		const response = await fetch('/add_character', {
			method: 'POST',
			body: formData,
		});

		if (response.ok) {
			await goto(`${base}/characters`, { replaceState: true });
		} else {
			const errorData = await response.json();
			errorMessage = errorData.message ?? 'Wystąpił nieznany błąd.';
		}
	};
</script>

<h1>Add New Character</h1>

<form on:submit={handleSubmit}>
	{#each names as name, index}
		<div style="display: flex; gap: 0.5rem; align-items: center;">
			<input
				type="text"
				name="firstName"
				placeholder="Imię"
				bind:value={names[index]}
			/>
			{#if names.length > 1}
				<button type="button" on:click={() => removeFirstName(index)}>Usuń</button>
			{/if}
		</div>
	{/each}

	<button type="button" on:click={addName}>Dodaj imię</button>

	<div style="margin-top: 1rem;">
		<label for="lastName">Last Name:</label>
		<input id="lastName" name="lastName" type="text" bind:value={lastName} />
	</div>

	<button type="submit">Add Character</button>
</form>

{#if errorMessage}
	<p style:color="red" style:text-align="center">{errorMessage}</p>
{/if}
