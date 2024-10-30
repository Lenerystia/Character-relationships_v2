<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/scripts/app.css';
	import type { Character } from '$lib/types/types';

	let characterId = $page.params.charId;
	export let data: { character: Character[] };
	let character = data.character[0];
</script>

<h1>Test character: {characterId}</h1>
<h2>Character: {character.firstName} {character.lastName}</h2>
