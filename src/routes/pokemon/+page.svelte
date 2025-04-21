<script lang="ts">
	import { createInfiniteQuery } from '@tanstack/svelte-query';
	import Button from '$lib/components/common/Button.svelte';
	import { POKEMON_LIMIT } from '$lib/constants';
	import { getPokemonWithTypes } from '$lib/api/getPokemonWithTypes.query';

	const usePokemonList = createInfiniteQuery({
		queryKey: ['pokemonList'],
		queryFn: ({ pageParam = 0 }) => getPokemonWithTypes({ page: pageParam }),
		initialPageParam: 0,
		getNextPageParam: (lastPage) => {
			if (lastPage.next) {
				const nextUrl = new URL(lastPage.next);
				const offset: string | null = nextUrl.searchParams.get('offset');
				if (offset) {
					return parseInt(offset) / POKEMON_LIMIT;
				}
			}
			return undefined;
		}
	});
</script>

{#if $usePokemonList.isPending}
	<p>Loading...</p>
{/if}
{#if $usePokemonList.error}
	<p>Error: {$usePokemonList.error.message}</p>
{/if}
{#if $usePokemonList.isSuccess}
	<div class="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] place-items-center gap-4 py-4">
		{#each $usePokemonList.data.pages as page}
			{#each page.results as pokemon}
				<a href="/pokemon/{pokemon.name}" class="capitalize">
					<p>{pokemon.name}</p>
					{#each pokemon.types as type}
						<p>{type.type.name}</p>
					{/each}
				</a>
			{/each}
		{/each}
	</div>
	<div class="flex justify-center py-4">
		<Button
			on:click={() => $usePokemonList.fetchNextPage()}
			disabled={!$usePokemonList.hasNextPage || $usePokemonList.isFetchingNextPage}
		>
			{#if $usePokemonList.isFetching}
				Loading more...
			{:else if $usePokemonList.hasNextPage}
				Load More
			{:else}Nothing more to load{/if}
		</Button>
	</div>
{/if}
