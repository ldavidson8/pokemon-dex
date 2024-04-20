<script lang="ts">
	import '@fontsource-variable/figtree';
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import ScreenSize from '$lib/components/utils/ScreenSize.svelte';
	import { browser, dev } from '$app/environment';

	import '../styles/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	NProgress.configure({
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		} else NProgress.done();
	}

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
	{#if dev}
		<ScreenSize />
	{/if}
</QueryClientProvider>
