<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { Col, Row } from 'sveltestrap';
	import SectionTitle from '$lib/components/elements/SectionTitle.svelte';

	import { renderRichText } from '@storyblok/svelte';
	$: html = renderRichText(data.story.content.body);
</script>

<svelte:head>
	<title>{data.story.content.title}</title>
	<meta name="description" content="descrizione prodotto" />
</svelte:head>

<SectionTitle title={data.story.content.title} folder={{ name: 'Prodotti', path: 'prodotti' }} />

<section class="py-5">
	<div class="container">
		<Row>
			<Col md={{ size: 8, offset: 2 }}>
				{#if data.story.content?.image}
					<img
						class="img-fluid rounded mx-auto d-block"
						src={data.story.content.image.filename}
						alt={data.story.content.title}
					/>
				{/if}
			</Col>
			<!-- <Col md="3">
				<h3>Info Prodotto</h3>
				<p><b>Tipologia:</b> {data.story.content.tags}</p>
				{#if html !== undefined}
					<p class="mt-4"><b>Descrizione:</b> {@html html}</p>
				{/if}
			</Col> -->
		</Row>
	</div>
</section>
