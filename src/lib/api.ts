const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemon = async (nameOrId: string | number) => {
	const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
	if (!response.ok) throw new Error('Pokemon not found');

	return await response.json();
};
