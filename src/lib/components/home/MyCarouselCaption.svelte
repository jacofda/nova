<script lang="ts">
	export let title!: string | null;
	export let link!: string | null;
	export let label!: string | null;
</script>

{#if label && link}
	<div class="position-absolute caption">
		<h3 class="mb-4 px-4">{title}</h3>
		<div class="d-flex justify-content-end">
			<a href={link} class="btn btn-secondary btn-lg px-4 rounded-0 text-uppercase">{label}</a>
		</div>
	</div>
{/if}

<style>
	.caption {
		color: #fff;
		background-color: rgb(0 0 0 / 45%);
		bottom: calc(12vw + 35px);
		right: 20vw;
		padding-top: 4%;
	}
</style>
