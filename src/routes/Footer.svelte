<script lang="ts">
	import { Icon } from 'sveltestrap';
	let latestProducts: any[] = [];
	import { onMount } from 'svelte';
	import { useStoryblokApi } from '@storyblok/svelte';
	onMount(async () => {
		const storyblokApi = useStoryblokApi();
		const { data } = await storyblokApi.get('cdn/stories', {
			starts_with: 'prodotti/',
			sort_by: 'created_at:desc',
			per_page: 3
		});
		latestProducts = data.stories;
	});
</script>

<div class="footer">
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<div class="logo-footer my-3">
					<img src="/images/logou.png" alt="Nova Infissi" />
				</div>
				<p class="fs-7 mb-4">
					Se volete vedere la nostra esposizione in sede vi preghiamo di contattarci per un
					appuntamento.
				</p>
				<ul class="list-style-none info">
					<li><Icon name="map" /> Via Roma 4 - 38050 - Ospedaletto (TN)</li>
					<li><Icon name="telephone" /> Tel: 0461 770045</li>
					<li><Icon name="phone" /> Cell: 347 780 6869</li>
					<li><Icon name="envelope" /> nova.infissi@gmail.com</li>
				</ul>
			</div>
			<div class="col-lg-4 mt-3 mt-lg-0">
				<h5 class="fs-4 mb-3">Ultimi prodotti</h5>
				{#each latestProducts as story}
					<div class="d-flex mb-3">
						<div class="me-2">
							<a href={`/prodotti/${story.slug}`} class="d-block img-wrapper">
								<img
									src={story.content.image.filename}
									alt={story.content.title}
									class="rounded-3 object-fit-cover"
								/></a
							>
						</div>

						<div>
							<a href={`/prodotti/${story.slug}`} class="text-decoration-none text-reset"
								><h6 class="fs-7 mb-0">{story.content.title}</h6></a
							>
							<small>{story.content.tags}</small>
						</div>
					</div>
				{/each}
			</div>
			<div class="col-lg-4  mt-3 mt-lg-0">
				<h5 class="fs-4">Ultimi progetti</h5>
			</div>
		</div>
	</div>
</div>
<div class="subfooter">
	<div class="container">
		<div class="row mx-0">
			<div class="col-md-4">
				<small>Copyright © 2014 - {new Date().getFullYear()} Nova Infissi. P.IVA 02181550225</small>
			</div>
			<div class="col-md-8 text-right text-end">
				<ul class="horizontal-list">
					<li class=""><a href="/">Home</a></li>
					<li class=""><a href="/chi-siamo">Chi Siamo</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.footer {
		background-color: #2e343a;
		padding: 50px 0 80px;
		color: #cecece;
		font-size: 14px;
		font-weight: 300;
	}

	.info {
		padding-left: 0;
		li {
			margin-bottom: 0.3rem;
		}
	}

	.subfooter {
		background-color: #22272b;
		padding: 30px 0;
		font-weight: 300;
		color: #cecece;
		font-size: 14px;
	}

	.img-wrapper {
		width: 50px;
		height: 50px;
	}
	.object-fit-cover {
		object-fit: cover;
		width: 50px;
		height: 50px;
	}
</style>
