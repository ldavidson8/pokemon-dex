<script lang="ts">
	import '../app.css';
	import '@fontsource/press-start-2p';
	import '@fontsource-variable/figtree';

	import { browser } from '$app/environment';
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
	<slot />
</QueryClientProvider>
