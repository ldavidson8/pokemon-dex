<script lang="ts">
	import 'iconify-icon';
</script>

<header class="sticky w-full border-b border-neutral-200 dark:bg-neutral-800">
	<div class="mx-auto flex items-center justify-between">
		<div class="flex items-center border-r p-3">
			<a href="/">
				<h1 class="font-mono text-xl">Pokédex</h1>
			</a>
		</div>
		<nav class="flex w-full">
			<ul class="flex w-full items-center justify-evenly gap-x-4">
				<li><a href="/search">Search</a></li>
				<li><a href="/compare">Compare</a></li>
				<li><a href="/pokemon">Pokémon</a></li>
				<li><a href="/about">About</a></li>
			</ul>
		</nav>
		<div class="flex items-center border-l p-3">
			<iconify-icon icon="lucide:info" height="24" width="24"></iconify-icon>
		</div>
	</div>
</header>
