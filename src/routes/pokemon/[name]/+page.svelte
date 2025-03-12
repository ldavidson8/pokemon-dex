<script lang="ts">
	import { page } from '$app/state';
	import { createQuery } from '@tanstack/svelte-query';
	import { getPokemonByName } from '$lib/api/getPokemonByName.query';

	const query = createQuery({
		queryKey: ['pokemon'],
		queryFn: () => getPokemonByName(page.params.name)
	});
</script>

{#if $query.isPending}
	<p>Loading...</p>
{/if}
{#if $query.error}
	<p>Error: {$query.error.message}</p>
{/if}
{#if $query.data}
	<pre class="rounded-md bg-gray-100 p-4">
		{JSON.stringify($query.data, null, 2)}
	</pre>
{/if}
{#if !$query.data && !$query.isLoading && !$query.error}
	<p>Pokémon not found</p>
{/if}
