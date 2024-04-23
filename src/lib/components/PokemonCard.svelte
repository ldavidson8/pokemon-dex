<script lang="ts">
	import { POKEMON_COLOURS } from '$lib/constants';
	import { cn } from '$lib/utils/cn';

	export let name: string;
	export let types: string[];
	export let image: string;
	export let href: string;

	function getGradientStyle() {
		if (types.length === 1) {
			return `linear-gradient(to bottom, ${getTypeColor(types[0])}, ${getTypeColor(types[0])})`;
		} else {
			return `radial-gradient(farthest-corner at 50% 50%, ${getTypeColor(types[0])}, ${getTypeColor(types[1])})`;
		}
	}

	function getTypeColor(type: string) {
		return POKEMON_COLOURS[type.toLowerCase() as keyof typeof POKEMON_COLOURS];
	}
</script>

<a {href} class="flex">
	<div class={cn('rounded-md border-2 p-4')} style={`background-image: ${getGradientStyle()};`}>
		<img src={image} alt={name} />
		<div class="font-mono">
			<div class="card-name">{name}</div>
			{#each types as type}
				<div class="card-type">{type}</div>
			{/each}
		</div>
	</div>
</a>
