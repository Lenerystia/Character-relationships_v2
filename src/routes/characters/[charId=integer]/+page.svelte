<script lang="ts">
    import { page } from '$app/stores';
    import '$lib/scripts/app.css'

    let pageCharId = $page.params.charId;
    export let data;
    let choosenCharacter = data.result?.[0];
</script>


<!-- {#if choosenCharacter} -->
    <h1>Test postać: {pageCharId}</h1>
    <h2>Postać {choosenCharacter.firstName} {choosenCharacter.lastName}</h2>
<!-- {:else}
    <p>Character not found.</p>
{/if} -->