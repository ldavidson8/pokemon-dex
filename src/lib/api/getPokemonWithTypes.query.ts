import { POKEMON_LIMIT } from '$lib/constants';
import { getPokemonList } from './getPokemonList.query';

type PokemonList = {
	name: string;
	url: string;
};

export const getPokemonWithTypes = async ({ page = 0, limit = POKEMON_LIMIT }) => {
	const data = await getPokemonList({ page, limit });

	const pokemonList = await Promise.all(
		data.results.map(async (pokemon: PokemonList) => {
			const pokemonResponse = await fetch(pokemon.url);
			const pokemonData = await pokemonResponse.json();
			return { ...pokemon, types: pokemonData.types };
		})
	);

	return { ...data, results: pokemonList };
};
