<script lang="ts">
    import { navigateBetweenPages } from "$lib/scripts/navigate";
    import '$lib/scripts/app.css'

    export let data: { result: any[] };
    let AllRelations = data.result;

</script>

<h1>Character List</h1>

{#if AllRelations && AllRelations.length > 0}
    <div>
        <table>
            <thead>
                <tr>
                    {#each Object.keys(AllRelations[0]) as colHead}
                        <th>{colHead}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each AllRelations as row}
                    <tr>
                        {#each Object.values(row) as cell}
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

<button name="characters" on:click={navigateBetweenPages}>Characters</button>
<button name="relations" on:click={navigateBetweenPages}>Relationships</button>
<button name="character_rel" on:click={navigateBetweenPages}>Characters relationships</button>