<script lang="ts">
	import { browser } from '$app/environment';
	import Dialog from '$lib/components/common/Dialog.svelte';
	import 'iconify-icon';
	import { settings } from '$lib/stores/settings';
	import InlineSelect from './common/InlineSelect.svelte';

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

<header class="container sticky top-2 mx-auto w-full rounded-xl px-8 py-2">
	<div class="mx-auto flex items-center justify-between">
		<div class="flex items-center p-3">
			<a href="/">
				<h1 class="font-mono text-xl">Pokédex</h1>
			</a>
		</div>
		<nav class="hidden w-full lg:flex">
			<ul class="flex w-full items-center justify-evenly gap-x-4">
				<li><a href="/search">Search</a></li>
				<li><a href="/compare">Compare</a></li>
				<li><a href="/pokemon">Pokémon</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
		<div class="flex items-center p-3">
			<Dialog>
				<iconify-icon icon="ph:info" width="24" slot="trigger" />
				<div slot="title">Settings</div>
				<div slot="description">
					<InlineSelect
						label="Theme"
						bind:value={$settings.theme}
						options={['System', 'Light', 'Dark']}
					/>
				</div>
			</Dialog>
		</div>
	</div>
</header>
