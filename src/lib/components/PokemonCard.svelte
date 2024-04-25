<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { formatId } from '$lib/utils/formatId';
	import { getTypeColor } from '$lib/utils/getTypeColour';
	import { getTypeIcon } from '$lib/utils/getTypeIcon';

	export let id: string;
	export let name: string;
	export let types: string[];
	export let image: string;
	export let href: string;
</script>

<a
	class={cn(
		'flex min-h-0 flex-col items-center justify-center gap-1 rounded-md border p-4 shadow-sm'
	)}
	{href}
>
	<div class="flex h-24 w-24 items-center justify-center">
		<img src={image} alt={name} class="object-cover" />
	</div>
	<p class="text-center font-medium">#{formatId(id)}</p>
	<p class="text-center font-medium">{name}</p>
	<div class="flex flex-wrap items-center justify-center gap-2">
		{#each types as type}
			<span
				class={cn(
					'flex items-center justify-between gap-1 rounded-xl px-2.5 py-2 text-sm text-white',
					getTypeColor(type)
				)}
			>
				{type}
				<svelte:component this={getTypeIcon(type)} class="size-5 text-white" />
			</span>
		{/each}
	</div>
</a>
