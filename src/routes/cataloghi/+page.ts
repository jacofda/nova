/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories', {
		starts_with: 'catalogues/',
		per_page: 100
	});

	const stories = dataStory.data.stories.map((story: any) => {
		return {
			brand: story.content.marca,
			tipology: story.content.tipologia,
			file: story.content.file
		};
	});
	return {
		story: stories
	};
}
