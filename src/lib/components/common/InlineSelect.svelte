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
	<ul class="relative isolate flex items-center rounded-md bg-background-200">
		{#each options as option}
			<li class="w-full">
				<button
					aria-label={`${label} button ${option}`}
					class={cn('h-10 w-full text-gray-900 hover:text-gray-1000', {
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
		<span
			class="indicator"
			style:width={`calc(${width}% - 0.5rem)`}
			style:left={`${width * index}%`}
		/>
	</ul>
</div>

<style>
	.indicator {
		position: absolute;
		border-radius: 0.375rem;
		isolation: isolate;
		background-color: hsl(var(--gray-200-value));
		box-shadow: 0 1px 2px var(--gray-alpha-100);
		z-index: -1;
		height: calc(100% - 0.5rem);
		pointer-events: none;
		transition: left 0.3s ease-in-out;
		translate: 0.25rem 0;
	}
</style>
