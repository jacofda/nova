<script lang="ts">
	import { Figure, Image } from 'sveltestrap';

	type Media = {
		alt: string;
		copyright: string;
		fieldtype: string;
		filename: string;
		focus: string;
		id: number;
		is_external_url: boolean;
		name: string;
		title: string;
	};

	export let title!: string;
	export let link!: string;
	export let tags!: string[];
	export let image!: Media;
	export let description!: string;
</script>

<article class="">
	<div class="row h-100  border">
		<div class="col-lg-6 ps-0">
			{#if image}
				<img
					class="img-fluid rounded mx-auto d-block"
					alt={image.alt}
					src={image.filename + '/m/0x450'}
				/>
			{/if}
		</div>
		<div class="col-lg-6 d-flex flex-column justify-content-between">
			<div>
				<p class="mt-2 mb-0"><small>{tags.join(', ')}</small></p>
				<p class="title mb-2 fs-5"><strong>{title}</strong></p>
				<p class="max-lines-2 fs-6">{description}</p>
			</div>
			<div class="d-flex justify-content-end">
				<a href={link} class="mb-2 btn btn-primary ">Read more</a>
			</div>
		</div>
	</div>
</article>

<style>
	.max-lines-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
