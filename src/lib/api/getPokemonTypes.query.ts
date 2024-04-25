export const getPokemonTypes = async () => {
	const response = await fetch('https://pokeapi.co/api/v2/type/');
	return response.json();
};
