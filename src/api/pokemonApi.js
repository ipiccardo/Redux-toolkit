import axios from 'axios'

// AXIOS.CREATE PERMITE REALIZAR UNA CONFIG STANDAR
export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});