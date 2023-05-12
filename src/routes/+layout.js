import { apiPlugin, storyblokInit, useStoryblokApi, RichTextSchema } from '@storyblok/svelte';
import cloneDeep from 'clone-deep';
const mySchema = cloneDeep(RichTextSchema);

export async function load() {
	storyblokInit({
		accessToken: 'DAmrH14anotI4NUoLu28YAtt',
		use: [apiPlugin],
		richText: {
			schema: mySchema,
			resolver: (component, blok) => {
				switch (component) {
					case 'my-custom-component':
						return `<div class="my-component-class">${blok.text}</div>`;
					default:
						return 'Resolver not defined';
				}
			}
		}
	});
	const storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
