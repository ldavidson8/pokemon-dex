<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex h-dvh w-dvw flex-col items-center justify-center gap-6 md:flex-row">
	<img src="/images/rowlet.png" class="size-60 text-gray-400" alt="logo" />
	<div class="flex flex-col items-center justify-center gap-4 text-center">
		<h1 class="text-center text-6xl font-bold text-pretty">
			{page.status} - {page.error?.message}
		</h1>
		<p class="text-xl font-medium">A wild pokemon appeared!</p>
		<div>
			<a aria-label="Go Home" class="rounded-lg bg-red-600 px-6 py-2 text-xl text-white" href="/">Run</a>
		</div>
	</div>
</div>
