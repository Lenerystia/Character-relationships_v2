<script lang="ts">
	import { page } from '$app/stores';
	import Navigate from '$lib/components/Navigate.svelte';
	import '$lib/scripts/app.css';
</script>

{#if $page.status === 404}
	<h1>{$page.status}: {$page.error?.message}</h1>
	<p>Sorry, but you haven't relations :(</p>
{/if}

<p>Come back!</p>
<Navigate />
