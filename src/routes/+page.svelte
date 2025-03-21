<script lang="ts">
  import { pokemon as pokemons } from "$lib/utils/pokemon";

  let showResults = $state(true);
  let pokemonSearch = $state("gar");
  let found: { name: string; index: number }[] = $derived.by(() => {
    if (!pokemonSearch.length) {
      return [];
    }
    const searchUpper = pokemonSearch.toUpperCase();
    const find = pokemons.map((value, index) => {
      if (value.toUpperCase().includes(searchUpper)) {
        return { name: pokemons[index], index };
      }
      return undefined;
    });
    return find.filter((value) => value !== undefined);
  });

  function handleClickSearch(e: MouseEvent) {
    const { target } = e;
    if (target === divResults || target === inputSearch) {
      showResults = true;
    } else {
      showResults = false;
    }
  }

  $effect(() => {
    document.addEventListener("click", handleClickSearch);

    return function () {
      document.removeEventListener("click", handleClickSearch);
    };
  });
  let divResults: HTMLDivElement | undefined = $state();
  let inputSearch: HTMLDivElement | undefined = $state();
</script>

<div class="relative h-8">
  <input bind:this={inputSearch} type="text" bind:value={pokemonSearch} />
  {#if showResults && found.length}
    <div
      bind:this={divResults}
      class="top-8 z-50 block max-h-[250px] overflow-scroll rounded-xs bg-amber-200 p-4 hover:cursor-grab"
    >
      {#each found as { name, index }}
        <div
          class="my-2 w-full rounded-sm bg-red-800/80 px-4 py-1 text-cyan-50 capitalize"
        >
          <a href={`/pokemon/${index}`}>
            <p class="hover:font-bold">
              {name}
            </p>
          </a>
        </div>
      {/each}
      <button class="cursor-pointer" onclick={() => (showResults = false)}
        >Close</button
      >
    </div>
  {/if}
</div>

<p>{pokemonSearch} {showResults}</p>

<code><pre>{JSON.stringify(found, null, 2)}</pre></code>
