export interface Pokemon {
    entry_number: number;
    name: string;
    url: string;
    pokemon_species: PokemonSpecies,
    sprites: Sprites;
}

export interface PokemonSpecies {
    name: string,
    url: string
}

export interface Sprites {
    front_default: string;
}