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
	export let tags!: string;
	export let image!: Media;
	export let description!: string;
	export let label!: string;
</script>

<article class="p-3">
	<div class="row h-100 border border-light shadow simple-card">
		<div class="col-lg-6 ps-0 overflow-hidden">
			{#if image}
				<a href={link} class="h-320 d-block">
					<img
						class="object-cover img-fluid rounded mx-auto d-block"
						loading="lazy"
						alt={image.alt}
						src={image.filename + '/m/0x450'}
					/>
				</a>
			{/if}
		</div>
		<div class="col-lg-6 d-flex flex-column justify-content-between">
			<div>
				<p class="mt-2 mb-0"><small>{tags}</small></p>
				<p class="title mb-2 fs-5"><strong>{title}</strong></p>
				<p class="max-lines-2 fs-6">{@html description}</p>
			</div>
			<div class="d-flex justify-content-center justify-content-md-end">
				<a href={link} class="mb-3 me-3 btn btn-dark ">Vedi {label}</a>
			</div>
		</div>
	</div>
</article>

<style>
	.h-320 {
		height: 320px;
	}

	.object-cover {
		object-fit: cover;
		height: 100%;
	}
	.max-lines-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.simple-card {
		transition: all 0.3s ease-in-out;
		border: 1px solid transparent;
		border-radius: 8px;
		overflow: hidden;
	}
	.simple-card:hover {
		transform: scale(1.02);
		border: 1px solid #464646 !important;
	}
	.simple-card div a img {
		transition: all 0.3s ease-in-out;
	}
	.simple-card:hover > div a img {
		transform: scale(1.2);
	}
</style>
