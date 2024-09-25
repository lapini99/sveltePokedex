import axios from "axios"

class pokeAPI {
    APIBaseURL = "https://pokeapi.co/api/v2/";

    instance = axios.create({
        baseURL: `${this.APIBaseURL}`,
        timeout: 20000,
        headers: {
            "Content-Type":"application/json"
        }
    })
}

export default pokeAPI; 
