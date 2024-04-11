<script lang="ts">
	import '@fontsource-variable/figtree';
	import '../app.css';

	import Header from '$lib/components/Header.svelte';

	import { browser } from '$app/environment';
	import Screen from '$lib/components/utils/screen.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
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
	<Screen />
</QueryClientProvider>
