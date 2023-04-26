<script lang="ts">
	import { Icon } from 'sveltestrap';
	export let iconName: string;
	export let title: string;
	export let text: string;
	export let orientation: string = 'text-end';
</script>

<div class="d-flex align-items-center p-3">
	{#if orientation === 'text-start'}
		<Icon name={iconName} class="p-3 bg-light border h5" />
	{/if}
	<div class="text px-3 {orientation}">
		<h5><b>{title}</b></h5>
		<p class="small">
			{text}
		</p>
	</div>
	{#if orientation === 'text-end'}
		<Icon name={iconName} class="p-3 bg-light border h5" />
	{/if}
</div>
