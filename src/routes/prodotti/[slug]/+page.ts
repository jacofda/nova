import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ parent, params }) {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories/prodotti/' + params.slug, {
		version: 'draft'
	});
	console.log(dataStory.data.story);
	return {
		story: dataStory.data.story
	};
}
