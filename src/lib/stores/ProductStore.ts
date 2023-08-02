import { writable } from 'svelte/store';

export const productStore = writable([{ id: 1, name: 'Product 1', price: 100 }]);
