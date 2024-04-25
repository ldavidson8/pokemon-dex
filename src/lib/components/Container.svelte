<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let className: string = '';

	export { className as class };
</script>

<div class={cn('grid-rows[auto,1fr] container grid grid-cols-1', className)}>
	<slot />
</div>
