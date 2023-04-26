/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories', {
		starts_with: 'portfolio/'
	});

	return {
		story: dataStory.data
	};
}
