<script lang="ts">
	import { page } from '$app/stores';

	import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Icon } from 'sveltestrap';

	let isOpen = false;

	function handleUpdate(event: any) {
		isOpen = event.detail.isOpen;
	}
</script>

<div class="container">
	<div class="row">
		<div class="col-md-8">
			<ul
				class="list-group list-group-horizontal d-flex justify-content-center justify-content-md-start"
			>
				<li class="list-group-item border-0 py-0 d-flex align-items-center">
					<Icon name="phone" class="me-2" /><small class="text-muted"> 347 780 6869 </small>
				</li>
				<li class="list-group-item border-0 py-0 d-flex align-items-center">
					<Icon name="house" class="me-2" /><small class="text-muted"> solo su appuntamento </small>
				</li>
				<li class="list-group-item border-0 py-0 d-flex align-items-center">
					<Icon name="at" class="me-2" /><small class="text-muted"> nova.infissi@gmail.com </small>
				</li>
			</ul>
		</div>
		<div
			class="col-md-4  list-group-horizontal d-flex justify-content-center justify-content-md-end"
		>
			<ul class="list-group list-group-horizontal">
				<li class="list-group-item rounded-0 border-bottom-0 py-0 d-flex align-items-center">
					<Icon name="facebook" />
				</li>
				<li class="list-group-item rounded-0 border-bottom-0 py-0 d-flex align-items-center">
					<Icon name="at" />
				</li>
				<li class="list-group-item rounded-0 border-bottom-0 py-0 d-flex align-items-center">
					<Icon name="whatsapp" />
				</li>
				<li class="list-group-item rounded-0 border-bottom-0 py-0 d-flex align-items-center">
					<Icon name="map" />
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

<header class="d-flex bg-white d-flex justify-content-end justify-content-md-center">
	<Navbar color="white" light expand="md">
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
			<Nav class="ms-auto" navbar>
				<NavItem>
					<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
						<a href="/">Home</a>
					</li>
				</NavItem>
				<NavItem>
					<li aria-current={$page.url.pathname === '/chi-siamo' ? 'page' : undefined}>
						<a href="/chi-siamo">Chi Siamo</a>
					</li>
				</NavItem>
				<NavItem>
					<li aria-current={$page.url.pathname.startsWith('/prodotti') ? 'page' : undefined}>
						<a href="/prodotti">Prodotti</a>
					</li>
				</NavItem>
				<NavItem>
					<li aria-current={$page.url.pathname.startsWith('/cataloghi') ? 'page' : undefined}>
						<a href="/cataloghi">Cataloghi</a>
					</li>
				</NavItem>

				<NavItem>
					<li aria-current={$page.url.pathname.startsWith('/portfolio') ? 'page' : undefined}>
						<a href="/portfolio">Portfolio</a>
					</li>
				</NavItem>

				<NavItem>
					<li aria-current={$page.url.pathname.startsWith('/contatti') ? 'page' : undefined}>
						<a href="/contatti">Contatti</a>
					</li>
				</NavItem>
			</Nav>
		</Collapse>
	</Navbar>

	<!-- <nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/chi-siamo' ? 'page' : undefined}>
				<a href="/chi-siamo">Chi Siamo</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/prodotti') ? 'page' : undefined}>
				<a href="/prodotti">Prodotti</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/cataloghi') ? 'page' : undefined}>
				<a href="/cataloghi">Cataloghi</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/portfolio') ? 'page' : undefined}>
				<a href="/portfolio">Portfolio</a>
			</li>
		</ul>
	</nav> -->
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
