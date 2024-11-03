<script lang="ts">
	import { navigateBetweenPages } from "$lib/scripts/navigate";
</script>


<button name="characters" on:click={navigateBetweenPages}>Characters</button>
<button name="relations" on:click={navigateBetweenPages}>Relationships</button>
<button name="character_rel" on:click={navigateBetweenPages}>Characters relationships</button>
<button name="add_character" on:click={navigateBetweenPages}>Add character</button>
<button name="/" on:click={navigateBetweenPages}>Main menu</button>