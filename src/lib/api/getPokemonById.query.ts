export const getPokemonById = async (id: number) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
	return response.json();
};
