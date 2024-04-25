<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import PokemonCard from '$lib/components/PokemonCard.svelte';
</script>

<Container>
	<h1>Pokédex</h1>
	<div class="grid auto-cols-auto grid-cols-auto-fill-200 gap-4 px-4">
		<PokemonCard
			id="25"
			name="Pikachu"
			types={['Electric']}
			image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
			href="/pokemon/pikachu"
		/>
		<PokemonCard
			id="6"
			name="Charizard"
			types={['Fire', 'Flying']}
			image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif"
			href="/pokemon/charizard"
		/>
		<PokemonCard
			id="7"
			name="Squirtle"
			types={['Water']}
			image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
			href="/pokemon/squirtle"
		/>
		<PokemonCard
			id="1"
			name="Bulbasaur"
			types={['Grass']}
			image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
			href="/pokemon/bulbasaur"
		/>
		<PokemonCard
			id="16"
			name="Pidgey"
			types={['Normal']}
			image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif"
			href="/pokemon/pidgey"
		/>
		<PokemonCard
			id="4"
			name="Charmander"
			types={['Fire']}
			image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"
			href="/pokemon/charmander"
		/>
		<PokemonCard
			id="7"
			name="Squirtle"
			types={['Water']}
			image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"
			href="/pokemon/squirtle"
		/>
		<PokemonCard
			id="1"
			name="Bulbasaur"
			types={['Grass']}
			image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"
			href="/pokemon/bulbasaur"
		/>
		<PokemonCard
			id="2"
			name="Ivysaur"
			types={['Grass', 'Poison']}
			image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif"
			href="/pokemon/pidgey"
		/>
	</div>
</Container>
