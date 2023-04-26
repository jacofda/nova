<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { Col, Row } from 'sveltestrap';
	import SectionTitle from '$lib/components/elements/SectionTitle.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<SectionTitle title={data.story.content.title} folder={{ name: 'Portfolio', path: 'portfolio' }} />

<section>
	<div class="container">
		<Row>
			<Col md="9">
				<h1>
					{data.story.content.title}
				</h1>
			</Col>
			<Col md="3" />
		</Row>
	</div>
</section>
