<script lang="ts">
	import { onMount, tick } from "svelte";
	import { getAllPokemon } from "../../api/requests/pokeRequests";
	import type { Pokemon } from "../../interfaces/pokemon";
	import pokeballIcon from "../../lib/images/pokeball.svg";

	let allPokemons: Pokemon[] = [];
	let loading: boolean = true;

	onMount(async () => {
		const pokemons = await getAllPokemon();
		allPokemons.push(...pokemons?.data.results);
		loading = false;

		await tick();
	});

	let imgIndex = 0;
</script>

<svelte:head>
	<title>Pokedex</title>
	<meta name="pokemons list" content="Pokemon pokedex" />
</svelte:head>

<div class="text-column">
	<h1>Pokédex</h1>
	{#if loading}
		<span>hola</span>
	{:else}
		<div class="container">
			<div class="top">
				<div class="block1">
					<span class="pokedex-region">Pokédex</span>
				</div>
				<div class="block2"></div>
			</div>
			<div class="pokedex">
				<img
					class="sprite"
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgIndex}.png`}
					alt="pokeball"
				/>
				<div class="pokemons-wrapper">
					{#each allPokemons as pokemon, index}
						<div class="pokemon">
							<button
								id={index.toString()}
								class="name-container"
								on:click={(e) => { imgIndex = parseInt(e.target?.id) + 1}}>
								<img src={pokeballIcon} alt="pokeball" />
								{pokemon.name.toUpperCase()}
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
