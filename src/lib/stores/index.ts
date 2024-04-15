import type { Settings } from '$lib/types';
import { writable } from 'svelte/store';

export const settings = writable<Settings>({
	theme: 'System'
});
