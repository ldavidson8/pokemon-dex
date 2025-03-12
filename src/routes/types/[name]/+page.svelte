<script>
	import { page } from '$app/state';
	import Container from '$lib/components/Container.svelte';
</script>

<Container>
	<h1>{page.params.name}</h1>
</Container>
