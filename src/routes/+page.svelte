<script lang="ts">
	import { browser } from '$app/environment';
	import InlineSelect from '$lib/components/common/InlineSelect.svelte';
	import Container from '$lib/components/Container.svelte';
	import { settings } from '$lib/stores';

	$: if (browser) {
		const theme = (() => {
			switch ($settings.theme) {
				case 'System':
					return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
				case 'Light':
				default:
					return 'light';
				case 'Dark':
					return 'dark';
			}
		})();
		const existingTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
		document.documentElement.classList.replace(existingTheme, theme);
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<Container>
	<h1>Welcome to SvelteKit</h1>
	<InlineSelect label="Theme" bind:value={$settings.theme} options={['System', 'Light', 'Dark']} />
</Container>
