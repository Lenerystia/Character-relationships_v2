<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/scripts/app.css';
	import { StatusCodes } from 'http-status-codes';
</script>

{#if $page.status === StatusCodes.NOT_FOUND}
	<h1>{$page.status}: {$page.error?.message}</h1>
	<p>Sorry, but you haven't relations :(</p>
{/if}

<p>Come back!</p>