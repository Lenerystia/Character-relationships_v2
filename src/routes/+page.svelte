<script lang="ts">
	import { navigateBetweenPages } from "$lib/scripts/navigate";
</script>

<h1>Menu</h1>
    <button name="characters" on:click={navigateBetweenPages}>Characters</button>
    <button name="relations" on:click={navigateBetweenPages}>Relationships</button>
    <button name="character_rel" on:click={navigateBetweenPages}>Characters relationships</button>