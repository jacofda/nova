import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

export async function load() {
	storyblokInit({
		accessToken: 'DAmrH14anotI4NUoLu28YAtt',
		use: [apiPlugin]
	});
	const storyblokApi = await useStoryblokApi();

	return {
		storyblokApi: storyblokApi
	};
}
