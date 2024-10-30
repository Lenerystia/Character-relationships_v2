<script lang="ts">
	import { page } from '$app/stores';
	import Navigate from '$lib/components/Navigate.svelte';
	import '$lib/scripts/app.css';
</script>

{#if $page.status === 404}
	<h1>{$page.status}: {$page.error?.message}</h1>
	<p>We're sorry, but... it looks like you don't have any characters!</p>
{/if}

<p>Come back!</p>
<Navigate />
