<script lang="ts">
	import { page } from '$app/stores';
	import Navigate from '$lib/components/Navigate.svelte';
	import '$lib/scripts/app.css';
</script>

<h1>Error {$page.status}</h1>
<p>{$page.error?.message}</p>

<br>
<Navigate />

