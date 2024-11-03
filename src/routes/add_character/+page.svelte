<script lang="ts">
	import Navigate from '$lib/components/Navigate.svelte';
	import '$lib/scripts/app.css';

	let firstName = '';
	let lastName = '';
</script>

	<h1>Add New Character</h1>
	<Navigate />
	<form method="post">
		<label for="firstName">First Name:</label>
		<input id="firstName" name="firstName" bind:value={firstName} type="text"/>

		<label for="lastName">Last Name:</label>
		<input id="lastName" name="lastName" bind:value={lastName} type="text"/>

		<button type="submit">Add Character</button>
	</form>
