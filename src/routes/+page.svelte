<script lang="ts">
	import { getPokemonById } from '$lib/api/getPokemonById.query';
	import Container from '$lib/components/Container.svelte';
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	import { cn } from '$lib/utils/cn';
	import { getTypeColor } from '$lib/utils/getTypeColour';
	import { getTypeIcon } from '$lib/utils/getTypeIcon';
	import { randomInt } from '$lib/utils/random';
	import { createQuery } from '@tanstack/svelte-query';

	const getRandomPokemon = createQuery({
		queryKey: ['randomPokemon'],
		queryFn: () => {
			const randomId = randomInt(1, 898);
			return getPokemonById(randomId);
		}
	});
</script>

<Container>
	<div class="flex items-center justify-between px-4 py-2">
		{#if $getRandomPokemon.isPending}
			<p>Loading...</p>
		{/if}
		{#if $getRandomPokemon.isError}
			<p>Error: {$getRandomPokemon.error.message}</p>
		{/if}
		{#if $getRandomPokemon.isSuccess}
			<div class="flex items-center gap-4">
				<h2 class="capitalize">{$getRandomPokemon.data.name}</h2>
				<img src={$getRandomPokemon.data.sprites.front_default} alt="{$getRandomPokemon.data.name} image" />
				{#each $getRandomPokemon.data.types as type}
					<span
						class={cn(
							'flex items-center justify-between gap-1 rounded-xl px-2.5 py-2 text-sm text-white',
							getTypeColor(type.type.name)
						)}
					>
						{type.type.name}
						<svelte:component this={getTypeIcon(type.type.name)} class="size-5 text-white" />
					</span>
				{/each}
			</div>
		{/if}
	</div>
	<div class="auto-fill-200 grid gap-4 px-4">
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
