import pokeAPI from "../pokeApi";

const APIinstance = new pokeAPI();

// @ts-ignore
export const getOnePokemon = async (name) => {
    try {
        return await APIinstance.instance.get(
            `${APIinstance.APIBaseURL}pokemon/${name}`
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

// @ts-ignore
export const getRegionPokedex = async (region) => {
    try {
        return await APIinstance.instance.get(
            `${APIinstance.APIBaseURL}/pokedex/${region}`
        )
    } catch (error) {
        console.log(error)
    }
}