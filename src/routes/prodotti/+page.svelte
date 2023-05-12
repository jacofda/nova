<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { Col, Row } from 'sveltestrap';
	import SectionTitle from '$lib/components/elements/SectionTitle.svelte';
	import TheSimpleCard from '$lib/components/elements/TheSimpleCard.svelte';

	import { renderRichText } from '@storyblok/svelte';
</script>

<svelte:head>
	<title>Prodotti</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<SectionTitle title="Prodotti" />

<section class="py-5">
	<div class="container">
		<Row>
			{#each data.story.stories as story}
				<Col md="6">
					<TheSimpleCard
						title={story.content.title}
						image={story.content.image}
						tags={story.content.tags}
						description={renderRichText(story.content.body)}
						link={`/prodotti/${story.slug}`}
					/>
				</Col>
			{/each}
		</Row>
	</div>
</section>
