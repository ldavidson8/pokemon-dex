<script lang="ts">
	import { Dialog, Separator } from 'bits-ui';
	import { fade } from 'svelte/transition';
	import { flyAndScale } from '$lib/utils/transitions';
</script>

<Dialog.Root open>
	<Dialog.Trigger class="inline-flex h-6 items-center justify-center">
		<slot name="trigger" />
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
		/>
		<Dialog.Content
			transition={flyAndScale}
			class="fixed left-1/2 top-1/2 z-50 w-full max-w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-background-200 outline-none sm:max-w-3xl md:w-full"
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
				class="absolute right-5 top-5 h-6 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-800"
			>
				<iconify-icon icon="ph:x" width="24"></iconify-icon>
				<span class="sr-only">Close</span>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
