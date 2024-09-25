import type { Pokedex } from "../../interfaces/pokedex";
import type { Pokemon } from "../../interfaces/pokemon";
import pokeAPI from "../pokeApi";

const APIinstance = new pokeAPI();

export const getOnePokemon = async (pokemon: Pokemon): Promise<any> => {
    try {
        return await APIinstance.instance.get(
            `${APIinstance.APIBaseURL}pokemon/${pokemon}`
        )
    } catch (error) {
        console.log(error)
    }
}

export const getAllPokemon = async () => {
    try {
        return await APIinstance.instance.get(
            `${APIinstance.APIBaseURL}/pokemon`
        )
    } catch (error) {
        console.log(error)
    }
}

export const getRegionPokedex = async (region: Pokedex): Promise<any> => {
    try {
        return await APIinstance.instance.get(
            `${APIinstance.APIBaseURL}/pokedex/${region}`
        )
    } catch (error) {
        console.log(error)
    }
}