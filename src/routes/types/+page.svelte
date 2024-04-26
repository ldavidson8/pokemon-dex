<script lang="ts">
	import { getPokemonTypes } from '$lib/api/getPokemonTypes.query';
	import Button from '$lib/components/common/Button.svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import { getTypeColor } from '$lib/utils/getTypeColour';
	import { cn } from '$lib/utils/cn';
	import { getTypeIcon } from '$lib/utils/getTypeIcon';
	import Container from '$lib/components/Container.svelte';

	const query = createQuery({
		queryKey: ['types'],
		queryFn: () => getPokemonTypes()
	});
</script>

<Container>
	{#if $query.isLoading}
		<p>Loading...</p>
	{/if}
	{#if $query.error}
		<p>Something went wrong</p>
		<Button on:click={() => $query.refetch()}>Try again</Button>
	{/if}
	{#if $query.data && $query.isSuccess}
		<div class="mx-auto grid grid-cols-2 gap-4">
			{#each $query.data.results as type}
				<a href="/types/{type.name}">
					<div
						class={cn(
							'flex scale-90 items-center justify-between gap-4 rounded-full px-5 py-4 transition-transform duration-200 ease-in-out hover:scale-95',
							cn(getTypeColor(type.name)),
							!getTypeIcon(type.name) && 'justify-center'
						)}
					>
						<p class="text-center text-xl font-medium capitalize text-white">{type.name}</p>
						<span class={cn('rounded-full px-2 py-2 text-white', getTypeColor(type.name))}>
							<svelte:component this={getTypeIcon(type.name)} class="size-8 " />
						</span>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</Container>
