<script lang="ts">
    import { page } from '$app/stores';
    import '$lib/scripts/app.css'

    let characterId = $page.params.charId;
    export let data;
    let character = data.result[0];
</script>

    <h1>Test postać: {characterId}</h1>
    <h2>Postać {character.firstName} {character.lastName}</h2>