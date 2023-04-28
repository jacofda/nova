<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import { Col, Row } from 'sveltestrap';
	import SectionTitle from '$lib/components/elements/SectionTitle.svelte';
	import TheCard from '$lib/components/elements/TheCard.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<SectionTitle title="Portfolio" />

<section class="py-5">
	<div class="container">
		<Row>
			{#each data.story.stories as story}
				<Col md="6">
					<TheCard
						title={story.content.title}
						image={story.content.image}
						tags={story.content.tags}
						description={story.content.abstract}
						link={`/portfolio/${story.slug}`}
					/>
				</Col>
			{/each}
		</Row>
	</div>
</section>
