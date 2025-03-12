<script lang="ts">
	import { Dialog, Separator } from 'bits-ui';
	import { fade } from 'svelte/transition';
	import { flyAndScale } from '$lib/utils/transitions';
</script>

<Dialog.Root>
	<Dialog.Trigger class="inline-flex h-6 items-center justify-center">
		<slot name="trigger" />
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs"
		/>
		<Dialog.Content
			transition={flyAndScale}
			class="bg-subtle fixed top-1/2 left-1/2 z-50 w-full max-w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-lg border outline-hidden sm:max-w-3xl md:w-full"
		>
			<Dialog.Title class="flex w-full items-center px-8 py-4 text-xl font-semibold">
				<slot name="title" />
			</Dialog.Title>
			<Separator.Root class="mt-5 block h-px bg-gray-300" />
			<Dialog.Description class=" p-4 sm:p-8">
				<slot name="description" />
			</Dialog.Description>
			<slot name="content" />
			<Dialog.Close
				class="absolute top-5 right-5 h-6 rounded-md focus-visible:ring-2 focus-visible:ring-red-800 focus-visible:outline-hidden"
			>
				<iconify-icon icon="ph:x" width="24"></iconify-icon>
				<span class="sr-only">Close</span>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
