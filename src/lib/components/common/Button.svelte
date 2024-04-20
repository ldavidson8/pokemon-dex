<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { tv, type VariantProps } from 'tailwind-variants';

	const variants = tv({
		base: 'inline-flex items-center justify-center rounded-md font-medium text-background-100 transition-colors ease-ease',
		variants: {
			variant: {
				default: 'bg-gray-1000 hover:bg-gray-900',
				destructive: 'bg-red-800 hover:bg-red-900',
				ghost: 'bg-background-100 text-gray-1000 hover:bg-gray-alpha-300',
				outline: 'border-input border bg-background-100 text-gray-1000 hover:bg-gray-alpha-300',
				link: 'text-amber-800 underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-8 px-3',
				lg: 'h-12 px-6 py-3',
				icon: 'h-10 w-10'
			}
		},

		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	type Variant = VariantProps<typeof variants>['variant'];
	type Size = VariantProps<typeof variants>['size'];

	type $$Props = ButtonPrimitive.Props & {
		variant?: Variant;
		size?: Size;
	};

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export { className as class };
</script>

<ButtonPrimitive.Root
	class={variants({ variant, size, className })}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
