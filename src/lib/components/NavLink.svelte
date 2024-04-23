<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils/cn';
	let path: string;
	export let href: string;

	$: path = $page.url.pathname;
</script>

<a {href} class={cn('rounded-md px-4 py-2 transition-colors', { 'text-amber-700': path === href })}>
	<slot />
</a>
