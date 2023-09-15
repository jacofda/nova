import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ parent, params }) {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories/portfolio/' + params.slug, {
		version: 'draft'
	});

	return {
		story: dataStory.data.story
	};
}

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


