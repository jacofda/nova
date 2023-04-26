<script lang="ts">
	type Folder = {
		name: string;
		path: string;
	};
	import { BreadcrumbItem, Col, Row } from 'sveltestrap';
	export let title: string;
	export let folder: Folder | null = null;
</script>

<section class="bg-light py-4 mt-1">
	<div class="container">
		<Row class="d-flex align-items-center">
			<Col md="6" class="text-center text-md-start">
				<h1 class="mb-0">
					{title}
				</h1>
			</Col>
			<Col md="6" class="d-flex justify-content-end">
				<ol class="breadcrumb">
					<BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
					{#if folder}
						<BreadcrumbItem><a href="/{folder.path}">{folder.name}</a></BreadcrumbItem>
					{/if}
					<BreadcrumbItem active>{title}</BreadcrumbItem>
				</ol>
			</Col>
		</Row>
	</div>
</section>

<style>
	section {
		box-shadow: inset 0px -2px 2px #ececec;
	}
	h1 {
		font-size: 36px;
		color: #464646;
		font-weight: 700;
		font-family: 'Lato', sans-serif;
	}
	.breadcrumb {
		margin-bottom: 0 !important;
	}
</style>
