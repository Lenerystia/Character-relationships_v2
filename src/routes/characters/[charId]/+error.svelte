<script lang="ts">
    import { page } from "$app/stores";
	import Navigate from "$lib/components/Navigate.svelte";
</script>

{#if $page.status === 404}
    <h1>{$page.status}: {$page.error?.message}</h1>
    <p>We're sorry, but we couldn't find the character you were looking for.</p>
{/if}
{#if $page.status === 400}
    <h1>{$page.status}: {$page.error?.message}</h1>
    <p>You, can't to do this.</p>
{/if}

<p>Come back!</p>
<Navigate />
