<script lang="ts">
	import { Icon } from 'sveltestrap';
	export let iconName: string;
	export let title: string;
	export let text: string;
</script>

<div>
	<Icon name={iconName} />
	<div class="text">
		<h4>{title}</h4>
		<p class="small">
			{text}
		</p>
	</div>
</div>
