<script lang="ts">
	import Navigate from '../../lib/components/Navigate.svelte';
	import '$lib/scripts/app.css';
	// import { goto } from '$app/navigation';

	let firstName = '';
	let lastName = '';

	export async function handleSubmit(event: Event) {
		event.preventDefault();

		// Prepare the form data
		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);

		// Send a POST request to add the character
		const response = await fetch('/add_character', {
			method: 'POST',
			body: formData,
		});

		if (response.ok) {
			alert('Character added successfully!');
			// goto("/characters"); TODO: Przekierowanie do strony tej postaci
		} else {
			alert('Error adding character');
		}
	}
</script>

		<h1>Add character</h1>
		<Navigate />
	<form on:submit|preventDefault={handleSubmit}>
		<label for="firstName">First Name:</label>
		<input id="firstName" bind:value={firstName} type="text" required />
		<br>
		<label for="lastName">Last Name:</label>
		<input id="lastName" bind:value={lastName} type="text" required />
		<button type="submit">Add Character</button>
	</form>