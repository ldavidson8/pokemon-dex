export const getPokemonByName = async (name: string) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
	return response.json();
};
