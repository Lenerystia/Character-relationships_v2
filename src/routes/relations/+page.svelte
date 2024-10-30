<script lang="ts">
    import Navigate from "../../lib/components/Navigate.svelte";
    import '$lib/scripts/app.css'
    import type { Relation } from "$lib/types/types";

    export let data: { result: Relation[] };
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
<br>
<Navigate />