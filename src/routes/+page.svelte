<script lang="ts">
    import '$lib/scripts/app.css'

    export let data: { result: any[] };
    let AllCharacters = data.result;

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<h1>Character List</h1>
<ul>
  {#each data.result as character}
    <li>{character.firstName}</li>
  {/each}
</ul>

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
                {#each AllCharacters as row}
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