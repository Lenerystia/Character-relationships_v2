<script lang="ts">
	import '$lib/scripts/app.css';
	import { goto } from '$app/navigation';

	let firstName = '';
	let lastName = '';
	let errorMessage = '';

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		if (!firstName || !lastName) {
			errorMessage = 'Both fields are required.';
			return;
		}

		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		const response = await fetch('/add_character', {
			method: 'POST',
			body: formData,
		});

		if (response.ok) {
			goto('/characters', { replaceState: true });
		} else {
			console.error('Error adding character. Please try again.');
		}
	};
</script>

<h1>Add New Character</h1>
<form on:submit={handleSubmit}>
	<label for="firstName">First Name:</label>
	<input id="firstName" name="firstName" bind:value={firstName} type="text" />

	<label for="lastName">Last Name:</label>
	<input id="lastName" name="lastName" bind:value={lastName} type="text" />

	<button type="submit">Add Character</button>
</form>

{#if errorMessage}
	<p style="color: red; text-align: center">{errorMessage}</p>
{/if}
