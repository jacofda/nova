<script>
	import CosaOffriamo from '$lib/components/home/CosaOffriamo.svelte';
	import ChiSiamo from '$lib/components/home/ChiSiamo.svelte';
	import CTACataloghi from '$lib/components/home/CTACataloghi.svelte';
	import Servizi from '$lib/components/home/Servizi.svelte';
	import SlideShow from '$lib/components/home/SlideShow.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<SlideShow />
<CosaOffriamo />
<ChiSiamo />
<CTACataloghi />
<Servizi />

<style>
</style>
