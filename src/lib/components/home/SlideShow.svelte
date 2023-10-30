<script lang="ts">
	import {
		Carousel,
		CarouselControl,
		CarouselIndicators,
		CarouselItem,
		CarouselCaption
	} from 'sveltestrap';
	import MyCarouselCaption from './MyCarouselCaption.svelte';
	const items = [
		{
			url: 'https://ik.imagekit.io/2gweb/nova/slide-1.webp',
			title: null,
			caption: null,
			link: null
		},
		{
			url: 'https://ik.imagekit.io/2gweb/nova/slide-2.webp',
			title: 'Esplora il nostro portfolio',
			caption: 'PORTFOLIO LAVORI',
			link: '/portfolio'
		},
		{
			url: 'https://ik.imagekit.io/2gweb/nova/slide-3.webp',
			title: 'Scarica i catagloghi dei nostri prodotti',
			caption: 'CATALOGHI PDF',
			link: '/cataloghi'
		}
	];
	let activeIndex = 0;
</script>

<Carousel {items} bind:activeIndex>
	<CarouselIndicators bind:activeIndex {items} />

	<div class="carousel-inner">
		{#each items as item, index}
			<CarouselItem
				bind:activeIndex
				itemIndex={index}
				style="background-image: url({item.url});background-position:50% 50%;background-size:cover"
			>
				<MyCarouselCaption title={item.title} label={item.caption} link={item.link} />
			</CarouselItem>
		{/each}
	</div>

	<!-- <CarouselControl direction="prev" bind:activeIndex {items} />
	<CarouselControl direction="next" bind:activeIndex {items} /> -->
</Carousel>

<style>
	.carousel-inner {
		height: 100%;
	}
</style>
