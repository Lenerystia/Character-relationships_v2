<script lang="ts">
	import { page } from '$app/state';
	import { StatusCodes } from 'http-status-codes';
	import '$lib/scripts/app.css';
	// TODO: Error - when you haven't got relations between your characters
	// TODO: Error - when you haven't got characters - so you can't have any relations?
</script>

{#if String(page.status) === String(StatusCodes.NOT_FOUND)}
	<h1>{page.status}: {page.error?.message}</h1>
	<p>We're sorry, but... it looks like you don't have any relations!</p>
{/if}

<p>Come back!</p>
