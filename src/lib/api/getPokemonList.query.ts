import { POKEMON_LIMIT } from '$lib/constants';

export const getPokemonList = async ({ page = 0, limit = POKEMON_LIMIT }) => {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`
	);
	return response.json();
};
