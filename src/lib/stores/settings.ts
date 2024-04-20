import type { Settings } from '$lib/types';
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const storedSettings = browser ? localStorage.getItem('settings') : null;
const initialSettings: Settings = storedSettings ? JSON.parse(storedSettings) : { theme: 'System' };

export const settings = writable(initialSettings);

settings.subscribe((newSettings) => {
	if (!browser) return;
	localStorage.setItem('settings', JSON.stringify(newSettings));
});
