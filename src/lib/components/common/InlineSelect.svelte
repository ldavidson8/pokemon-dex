<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { createEventDispatcher } from 'svelte';

	type T = $$Generic<string | number>;
	export let label: string;
	export let options: T[];
	export let value: T;

	const dispatch = createEventDispatcher();

	const width = 100 / options.length;
	$: index = options.findIndex((o) => o === value);
</script>

<div class="flex flex-col gap-2">
	<p>{label}</p>
	<ul class="bg-background-100 relative isolate flex items-center rounded-md">
		{#each options as option}
			<li class="w-full">
				<button
					aria-label={`${label} button ${option}`}
					class={cn('hover:text-gray-1000 h-10 w-full text-gray-900', {
						'text-gray-1000': option === value
					})}
					on:click={(event) => {
						value = option;
						dispatch('change', event);
					}}
				>
					{option}
				</button>
			</li>
		{/each}
		<span class="indicator" style:width={`calc(${width}% - 0.5rem)`} style:left={`${width * index}%`}></span>
	</ul>
</div>

<style>
	.indicator {
		position: absolute;
		border-radius: 0.375rem;
		isolation: isolate;
		background-image: linear-gradient(to right, var(--color-gray-400), var(--color-gray-300));
		z-index: -1;
		height: calc(100% - 0.5rem);
		pointer-events: none;
		transition: left 0.2s ease-in-out;
		translate: 0.25rem 0;
		&:before {
			content: '';
			z-index: -1;
			position: absolute;
			inset: 1px;
			background-image: linear-gradient(var(--color-gray-100), var(--color-gray-200));
			border-radius: calc(0.5rem - 1px);
			pointer-events: none;
		}
	}
</style>
