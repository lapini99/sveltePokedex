<script lang="ts">
	import { onMount } from "svelte";
	import { getAllPokemon } from "../../api/requests/pokeRequests";
	import type { Pokemon } from "../../interfaces/pokemon";

	let allPokemons: Pokemon[] = [];
	let flag: boolean = true;

	onMount(async () => {
		const pokemons = await getAllPokemon();
		allPokemons.push(...pokemons?.data.results);
		flag = false;
	});
	console.log(allPokemons);
</script>

<svelte:head>
	<title>Pokedex</title>
	<meta name="pokemons list" content="Pokemon pokedex" />
</svelte:head>

<div class="text-column">
	<h1>Pokédex</h1>
	{#if flag}
		<span>hola</span>
	{:else}
		<div>
			Pokemons
			{#each allPokemons as pokemon, index}
				<div>
					<span>{pokemon.name}</span>
					<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="pokemon">
				</div>
			{/each}
		</div>
	{/if}
</div>
