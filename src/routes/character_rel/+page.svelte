<script lang="ts">
    import Navigate from "../../components/Navigate.svelte";
    import '$lib/scripts/app.css'

    export let data: { result: any[] };
    let relationBetweenCharacter = data.result;

</script>

<title>Main page</title>

<h2>Characters relationships</h2>
        
{#if data?.result}
    <div>
        <table class="rainbow">
            <thead>
                <tr>
                    {#each Object.keys(relationBetweenCharacter[0]) as colHead}
                        <th>{colHead}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each relationBetweenCharacter as row}
                    <tr>
                        {#each Object.values(row) as cell}
                            <td>{cell}</td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}

<Navigate />