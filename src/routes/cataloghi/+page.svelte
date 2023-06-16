<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	import { Row, ListGroupItem } from 'sveltestrap';
	import { Icon } from 'sveltestrap';
	import SectionTitle from '$lib/components/elements/SectionTitle.svelte';

	const grouped = data.story.reduce((group: any, item: any) => {
		const { brand } = item;
		group[brand] = group[brand] ?? [];
		group[brand].push(item);
		return group;
	}, {});
	const obj = [];
	for (const brand in grouped) {
		let brandObj = {
			brand: brand,
			catalogs: grouped[brand]
		};
		obj.push(brandObj);
	}
	const sorted = obj.sort((a, b) => b.catalogs.length - a.catalogs.length);
</script>

<svelte:head>
	<title>Cataloghi</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<SectionTitle title="Cataloghi" />
<section class="py-5">
	<div class="container">
		<Row>
			{#each sorted as company}
				<div class="col-sm-6 mb-3">
					<div class="card">
						<div class="card-header bg-secondary text-white">
							{company.brand}
						</div>
						<ul class="list-group list-group-flush">
							{#each company.catalogs as catalog}
								<ListGroupItem tag="a" target="_BLANK" href={catalog.file?.filename} action>
									{catalog.tipology}
									<Icon name="download" />
								</ListGroupItem>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</Row>
	</div>
</section>

<style>
	:global(.list-group-item) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
