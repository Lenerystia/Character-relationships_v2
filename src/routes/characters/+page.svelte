<script lang="ts">
    import Navigate from "$lib/components/Navigate.svelte";
    import '$lib/scripts/app.css'
    import type { Character } from "$lib/types/types";

    //TODO: Change to right type
    export let data: { result: Character[] };
    let AllCharacters = data.result;

</script>

<h1>Character List</h1>

//TODO: Throw getting column head from db, add static name for columns
//TODO: row - change name (to character)
//TODO: cell - change name to something sensible
//TODO: field 'status' and field 'data result' - class containing character and status: error code. Then instead 'characters no found' - if, when code is 0 - good = no character, else - db connection failed
//TODO: Separate page to db conn failed - for no characters - not necessary 
//TODO: This page for debug
{#if AllCharacters && AllCharacters.length > 0}
    <div>
        <table>
            <thead>
                <tr>
                    {#each Object.keys(AllCharacters[0]) as colHead}
                        <th>{colHead}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each AllCharacters as character}
                    <tr>
                        {#each Object.values(character) as cell}
                            <td>{cell}</td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{:else}
    <p>No characters found.</p>
{/if}

<Navigate />