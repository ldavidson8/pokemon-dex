<script>
	import { onMount } from 'svelte';

	let width = 0;
	let height = 0;

	onMount(() => {
		updateDimensions();
		window.addEventListener('resize', updateDimensions);

		return () => {
			window.removeEventListener('resize', updateDimensions);
		};
	});

	function updateDimensions() {
		width = window.innerWidth;
		height = window.innerHeight;
	}
</script>

<div
	class="fixed bottom-5 left-5 z-50 flex items-center space-x-2 rounded-full bg-gray-1000 px-2.5 py-1 font-mono text-xs font-medium text-background-100"
>
	<span>
		{width.toLocaleString()} x {height.toLocaleString()}
	</span>
	<span class="sm:hidden">XS</span>
	<span class="hidden sm:inline md:hidden">SM</span>
	<span class="hidden md:inline lg:hidden">MD</span>
	<span class="hidden lg:inline xl:hidden">LG</span>
	<span class="hidden xl:inline 2xl:hidden">XL</span>
	<span class="hidden 2xl:inline">2XL</span>
</div>
