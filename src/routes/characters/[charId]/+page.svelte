<script lang="ts">
	import type { TCharacter } from '$lib/types/types';

	import '$lib/scripts/app.css';
	import { page } from '$app/stores';

	let characterId = parseInt($page.params.charId);
	export let data: { character: TCharacter[] };
	let character = data.character[0];
</script>

<h1>Test character: {characterId}</h1>
<h2>Character: {character.firstName} {character.lastName}</h2>
