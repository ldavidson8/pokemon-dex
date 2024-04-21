export const getPokemonList = async ({ pageParam = 1 }) => {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${(pageParam - 1) * 50}`
	);
	return response.json();
};
