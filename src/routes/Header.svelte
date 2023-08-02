<script lang="ts">
	import { page } from '$app/stores';

	import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Icon } from 'sveltestrap';

	let isOpen = false;

	function handleUpdate(event: any) {
		isOpen = event.detail.isOpen;
	}

	function handleClick() {
		if (isOpen) {
			isOpen = false;
		}
	}
</script>

<div class="container">
	<div class="row">
		<div class="col-md-8">
			<ul
				class="list-group list-group-horizontal d-flex justify-content-center justify-content-md-start"
			>
				<li class="list-group-item border-0 py-0 d-flex align-items-center d-none d-md-flex">
					<Icon name="phone" class="me-2" /><small class="text-muted"> 347 780 6869 </small>
				</li>
				<li class="list-group-item border-0 py-0 d-flex align-items-center">
					<Icon name="house" class="me-2" /><small class="text-muted"> solo su appuntamento </small>
				</li>
				<li class="list-group-item border-0 py-0 d-flex align-items-center d-none d-lg-flex">
					<Icon name="at" class="me-2" /><small class="text-muted"> nova.infissi@gmail.com </small>
				</li>
			</ul>
		</div>
		<div
			class="col-md-4  list-group-horizontal d-flex justify-content-center justify-content-md-end"
		>
			<ul class="list-group list-group-horizontal">
				<li class="list-group-item rounded-0 border-bottom-0 py-0 d-flex align-items-center">
					<a href="https://www.facebook.com/pages/Nova-Infissi/904543452930877" target="_blank"
						><Icon name="facebook" /></a
					>
				</li>
				<li class="list-group-item rounded-0 border-bottom-0 py-0 d-flex align-items-center">
					<a href="mailto:nova.infissi@gmail.com" target="_BLANK"><Icon name="at" /></a>
				</li>
				<li class="list-group-item rounded-0 border-bottom-0 py-0 d-flex align-items-center">
					<a href="tel:+393477806869" target="_BLANK"><Icon name="whatsapp" /></a>
				</li>
				<li class="list-group-item rounded-0 border-bottom-0 py-0 d-flex align-items-center">
					<a
						href="https://www.google.com/maps/place/Nova+Infissi+di+Cenci+Giuseppe/@46.04209,11.553852,17z/data=!3m1!4b1!4m2!3m1!1s0x477893ac8b50b383:0x1902b0ee90000118"
						target="_BLANK"><Icon name="map" /></a
					>
				</li>
			</ul>
		</div>
	</div>
</div>
<div class="bg-light py-2 border-top border-bottom">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<a href="/" class="d-block text-center">
					<img src="/images/logo.png" alt="Nova Infissi Logo" />
				</a>
			</div>
		</div>
	</div>
</div>

<header class="bg-white justify-content-start justify-content-md-center w-100">
	<Navbar color="white" light expand="md" class="">
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
			<Nav class="ms-auto" navbar>
				<NavItem>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/" on:click={handleClick}>Home</a>
					</li>
				</NavItem>
				<NavItem>
					<li aria-current={$page.url.pathname === '/chi-siamo' ? 'page' : undefined}>
						<a href="/chi-siamo" on:click={handleClick}>Chi Siamo</a>
					</li>
				</NavItem>
				<NavItem>
					<li aria-current={$page.url.pathname.startsWith('/prodotti') ? 'page' : undefined}>
						<a href="/prodotti" on:click={handleClick}>Prodotti</a>
					</li>
				</NavItem>
				<NavItem>
					<li aria-current={$page.url.pathname.startsWith('/cataloghi') ? 'page' : undefined}>
						<a href="/cataloghi" on:click={handleClick}>Cataloghi</a>
					</li>
				</NavItem>

				<NavItem>
					<li aria-current={$page.url.pathname.startsWith('/portfolio') ? 'page' : undefined}>
						<a href="/portfolio" on:click={handleClick}>Portfolio</a>
					</li>
				</NavItem>

				<NavItem>
					<li aria-current={$page.url.pathname.startsWith('/contatti') ? 'page' : undefined}>
						<a href="/contatti" on:click={handleClick}>Contatti</a>
					</li>
				</NavItem>
			</Nav>
		</Collapse>
		{#if !isOpen}
			<span class="d-md-none ms-1">MENU</span>
		{/if}
	</Navbar>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		background-color: #fff;
		box-shadow: 0px 3px 3px #ebebeb;
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		padding-top: 0.4rem;
		padding-bottom: 0.4rem;
	}
	@media (min-width: 768px) {
		li[aria-current='page']::before {
			--size: 6px;
			content: '';
			width: 0;
			height: 0;
			position: absolute;
			bottom: 0;
			left: calc(50% - var(--size));
			border: var(--size) solid transparent;
			border-bottom: var(--size) solid var(--bs-gray-700);
		}
	}
	li a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
