<script lang="ts">
	import { onMount, tick } from "svelte";
	import { getAllPokemon, getAllPokedexs, getRegionPokedex } from "../../api/requests/pokeRequests";
	import type { Pokemon } from "../../interfaces/pokemon";
	import pokeballIcon from "../../lib/images/pokeball.svg";
    import type { Pokedex } from "../../interfaces/pokedex";

	let allPokemons: Pokemon[] = [];
	let loading: boolean = true;
	let imgUrl = 0;
	let allPokedexs: Pokedex[] = []

	onMount(async () => {
		await tick();

		// const pokemons = await getAllPokemon();
		// allPokemons.push(...pokemons?.data.results);
		
		const pokedexs = await getAllPokedexs();
		allPokedexs.push(...pokedexs)

		let pokemons = await getRegionPokedex("national")
		allPokemons.push(...pokemons);

		loading = false;
	});

	async function swapPokedex(e: any) {
		let pokemons = await getRegionPokedex(e.target.value)
		allPokemons = []
		allPokemons.push(...pokemons);
		allPokemons = allPokemons;
		console.log(allPokemons)
	}

</script>

<svelte:head>
	<title>Pokedex</title>
	<meta name="pokemons list" content="Pokemon pokedex" />
</svelte:head>

<div class="text-column">
	<h1>Pokédex</h1>
	{#if loading}
		<span>loading content...</span>
	{:else}
		<div class="container">
			<div class="top">
				<div class="block1">
					<div class="pokedex-selector">
						<span class="pokedex-region">Pokédex</span>
						<select name="pokedexs" on:change={swapPokedex}>
							{#each allPokedexs as pokedex }
								<option value={pokedex.name}>{pokedex.name.toUpperCase()}</option>
							{/each}
						</select>
					</div>
				</div>
				<div class="block2"></div>
			</div>
			<div class="pokedex">
				<div class="sprite-wrapper">
					<img
						class="sprite"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgUrl}.png`}
						alt="pokeball"
					/>
				</div>
				<div class="pokemons-wrapper">
					{#each allPokemons as pokemon}
						<div class="pokemon">
							<button
								id={pokemon?.entry_number?.toString()}
								class="name-container"
								on:click={() => {imgUrl = parseInt(pokemon?.pokemon_species && pokemon?.pokemon_species.url.match(/\/(\d+)\/$/)[1])}}>
								<img src={pokeballIcon} alt="pokeball" />
								{ pokemon.name ? pokemon.name.toUpperCase() : pokemon.pokemon_species.name.toUpperCase()}
							</button>
						</div>
					{/each}
				</div>
			</div>
			<div class="bot">
				<div class="block1">
					<span class="pokedex-region">Pokémon #</span>
				</div>
				<div class="block2"></div>
			</div>
		</div>
	{/if}
</div>

<style>
	@import "../../styles/pokemon.scss";
</style>
