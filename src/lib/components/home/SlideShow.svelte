<script lang="ts">
	import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'sveltestrap';

	const items = [
		{
			url: 'https://www.novainfissi.it/public/img/slide-1.jpg',
			title: '',
			caption: ''
		},
		{
			url: 'https://www.novainfissi.it/public/img/slide-2.jpg',
			title: 'Slide 2',
			caption: 'Slide 2'
		},
		{
			url: 'https://www.novainfissi.it/public/img/slide-3.jpg',
			title: 'Slide 3',
			caption: 'Slide 3'
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
				<!-- <CarouselCaption captionHeader={item.title} captionText={item.caption} /> -->
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
