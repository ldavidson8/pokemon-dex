<script lang="ts">
	import { browser, dev } from '$app/environment';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';
	import { navigating } from '$app/state';
	import '@fontsource-variable/figtree';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import ScreenSize from '$lib/components/utils/ScreenSize.svelte';
	import { ms } from 'itty-time';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser,
				refetchOnWindowFocus: false,
				staleTime: ms('1 day')
			}
		}
	});
</script>

<svelte:head>
	<title>Pokédex</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<QueryClientProvider client={queryClient}>
	<Header />
	<slot />
	{#if dev}
		<ScreenSize />
	{/if}
	<SvelteQueryDevtools />
</QueryClientProvider>
