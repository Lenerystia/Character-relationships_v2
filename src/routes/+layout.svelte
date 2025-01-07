<script lang="ts">
	import Navigate from '$lib/components/Navigate.svelte';
	let { children } = $props();
</script>

<Navigate />
{@render children()}
