<script lang="ts">
	import { browser } from '$app/environment';
	import Dialog from '$lib/components/common/Dialog.svelte';
	import 'iconify-icon';
	import { settings } from '$lib/stores/settings';
	import InlineSelect from './common/InlineSelect.svelte';
	import NavLink from './NavLink.svelte';

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

<header class="container sticky top-0 mx-auto w-full px-8 py-2">
	<div class="mx-auto flex items-center justify-between">
		<div class="flex items-center p-3">
			<a href="/">
				<h1 class="font-mono text-xl">Pokédex</h1>
			</a>
		</div>
		<nav class="hidden w-full lg:flex">
			<ul class="flex w-full items-center justify-evenly gap-x-4">
				<li><NavLink href="/search">Search</NavLink></li>
				<li>
					<NavLink href="/pokemon">Pokédex</NavLink>
				</li>
				<li><NavLink href="/types">Types</NavLink></li>
			</ul>
		</nav>
		<div class="hidden items-center p-3 lg:flex">
			<Dialog>
				<iconify-icon icon="ph:gear" width="24" slot="trigger" />
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
