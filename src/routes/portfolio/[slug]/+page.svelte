<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;
	import { Col, Row } from 'sveltestrap';
	import SectionTitle from '$lib/components/elements/SectionTitle.svelte';
	import BiggerPicture from 'bigger-picture';

	// import style
	import 'bigger-picture/css';
	let showOnClient = false;
	// This function is run on the client side
	import { onMount } from 'svelte';
	onMount(() => {
		showOnClient = true;

		// initialize BiggerPicture
		const bp = BiggerPicture({
			target: document.body
		});

		setTimeout(() => {
			// grab image links
			const imageLinks = document.querySelectorAll('.opener');
			// add click listener to open BiggerPicture
			for (let link of imageLinks) {
				link.addEventListener('click', openGallery);
			}

			// open BiggerPicture
			function openGallery(e: any) {
				e.preventDefault();
				bp.open({
					items: imageLinks,
					el: e.currentTarget
				});
			}
		}, 1000);
	});
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
					<!-- {data.story.content.title} -->
				</h1>
			</Col>
			<Col md="3" />
		</Row>

		{#if data.story.content.gallery?.length === 0}
			<Row class="py-5">
				<Col md={{ size: 6, offset: 3 }}>
					<a
						class="opener"
						href={data.story.content.image?.filename + '/m/'}
						data-img={data.story.content.image?.filename + '/m/'}
					>
						<img
							src={data.story.content.image?.filename + '/m/'}
							alt={data.story.content.image?.filename + '/m/'}
							class="img-fluid rounded-3"
							loading="lazy"
						/></a
					>
					<p class="mt-1 text-gray">{data.story.content?.abstract}</p>
				</Col>
			</Row>
		{/if}

		{#if showOnClient}
			<Row class="py-5">
				<Col>
					<swiper-container
						space-between="20"
						pagination={{
							hideOnClick: true
						}}
						breakpoints={{
							768: {
								slidesPerView: 3
							}
						}}
					>
						{#each data.story.content.gallery as image}
							<swiper-slide lazy="true">
								<a class="opener" href={image.filename} data-img={image.filename}>
									<img
										src={image.filename}
										alt={image.filename}
										class="img-fluid"
										loading="lazy"
									/></a
								>
							</swiper-slide>
						{/each}
					</swiper-container>
				</Col>
			</Row>
		{/if}
	</div>
</section>
