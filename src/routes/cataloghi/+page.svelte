<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
	import { Col, Row, Collapse, Button, ListGroup, ListGroupItem } from 'sveltestrap';
	import { Icon } from 'sveltestrap';
	import SectionTitle from '$lib/components/elements/SectionTitle.svelte';

	console.log(data.story);
	let open: boolean[] = [true];
	let isOpen: boolean = true; // @ts-ignore
	const grouped = data.story.reduce((group, item) => {
		const { brand } = item;
		group[brand] = group[brand] ?? [];
		group[brand].push(item);
		return group;
	}, {});
	for (let x = 1; x < 2; x++) {
		open.push(false);
	}
</script>

<svelte:head>
	<title>Cataloghi</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<SectionTitle title="Cataloghi" />
<section class="py-5">
	<div class="container">
		<Row>
			{#each Object.keys(grouped) as brand, i}
				<Col xs="12" md="6" xl="4">
					<Button color="dark" size="lg" on:click={() => (open[i] = !open[i])} class="my-3">
						{brand}
						{#if open[i]}
							<Icon name="chevron-down" />
						{:else}
							<Icon name="chevron-left" />
						{/if}
					</Button>

					{#if open[i]}
						<Collapse {isOpen}>
							<ListGroup>
								{#each grouped[brand] as catalog}
									<ListGroupItem tag="a" target="_BLANK" href={catalog.file.filename} action>
										{catalog.tipology}
										<Icon name="download" />
									</ListGroupItem>
								{/each}
							</ListGroup>
						</Collapse>
					{/if}
				</Col>
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
