<script lang="ts">
	import emailjs from '@emailjs/browser';

	import { Toast, ToastBody, ToastHeader } from 'sveltestrap';
	let isOpen = false;

	function toggle() {
		isOpen = !isOpen;
	}

	let timer: number = 0;

	import { onMount } from 'svelte';
	onMount(() => {
		setInterval(() => {
			timer += 1;
		}, 1000);
	});
	let fb = {
		title: 'Richiesta inviata',
		body: 'Vi risponderemo al più presto',
		color: 'success'
	};

	const submitForm = async (event: any) => {
		const form = document.getElementById('cform');

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE,
				import.meta.env.VITE_EMAILJS_TEMPLATE,
				event.target,
				import.meta.env.VITE_EMAILJS_KEY
			)
			.then(
				(result) => {
					toggle();
					console.log('SUCCESS!', result.text);
					// @ts-ignore
					form.reset();
				},
				(error) => {
					fb = {
						title: 'Errore',
						body: 'Avete compilato il form troppo velocemente, riprovate tra qualche secondo',
						color: 'danger'
					};
					toggle();
					console.log('FAILED...', error.text);
					// @ts-ignore
					form.reset();
				}
			);
	};
</script>

<svelte:head>
	<title>Contatti | Novainfissi Ospedaletto Trento</title>
	<meta
		name="description"
		content="Visite in sede solo su appuntamento, altrimenti scrivi un un'email o chiamaci"
	/>

	<script
		src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
		async
		defer
	>
	</script>

	<script type="text/javascript">
		var onloadCallback = function () {
			// alert('grecaptcha is ready!');
			grecaptcha.render('html_element', {
				sitekey: '6Le4q7goAAAAAJuBFyoj3Az0dAAJ2Djrj2XMLNSe'
			});
		};
	</script>
</svelte:head>

<section class="py-5">
	<div class="container">
		<div class="row">
			<div class="col-md-7 pe-md-5">
				<h1 class="mb-2">Contatti</h1>
				<p>
					Non esitare a contattarci per ogni tipo di richiesta o informazione. Sempre pronti a darti
					una risposta!
				</p>

				<div class=" d-flex justify-content-center my-3">
					<Toast class="mr-1" {isOpen}>
						<ToastHeader icon={fb.color} {toggle}>{fb.title}</ToastHeader>
						<ToastBody>{fb.body}</ToastBody>
					</Toast>
				</div>

				<form on:submit|preventDefault={submitForm} id="cform">
					<div class="form-floating mb-3">
						<input
							name="name"
							type="text"
							class="form-control"
							id="floatingInput1"
							placeholder="mario rossi"
							required
						/>
						<label for="floatingInput1">Nome e cognome</label>
					</div>

					<div class="form-floating mb-3">
						<input
							type="email"
							name="email"
							class="form-control"
							id="floatingInput2"
							placeholder="name@example.com"
							required
						/>
						<label for="floatingInput2">Indirizzo email</label>
					</div>

					<div class="form-floating mb-3">
						<input
							type="number"
							name="phone"
							class="form-control"
							id="floatingInput3"
							placeholder="3421967852"
							required
						/>
						<label for="floatingInput3">Telefono</label>
					</div>

					<div class="form-floating  mb-3">
						<textarea
							name="message"
							class="form-control"
							placeholder="Messaggio"
							id="floatingTextarea"
							style="height:130px"
							required
						/>
						<label for="floatingTextarea">Messaggio</label>
					</div>

					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							required
							id="flexCheckDefault"
						/>
						<label class="form-check-label" for="flexCheckDefault">
							Letta l'informativa ai sensi dell’art. 13 Reg. nr. UE 679/2016, presto il mio
							specifico consenso al trattamento dei dati forniti per le specifiche finalità ivi
							indicate
						</label>
					</div>
					<div
						id="html_element"
						class="g-recaptcha"
						data-sitekey="6Le4q7goAAAAAJuBFyoj3Az0dAAJ2Djrj2XMLNSe"
					/>
					<div class="mb-3 text-center text-lg-left mt-4 mb-5">
						<button class="btn btn-primary btn-lg" type="submit">Invia richiesta</button>
					</div>
				</form>
			</div>
			<div class="col-md-5 ps-md-5 border-start">
				<h3 class="mb-3">Dove siamo</h3>

				<ul class="list-style-none ps-0">
					<li><b>Nova Infissi di Cenci Giuseppe</b></li>
					<li>Via Roma 4 - 38050 - Ospedaletto (TN)</li>
				</ul>

				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11077.825413591869!2d11.5538625!3d46.041995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477893ac8b50b383%3A0x1902b0ee90000118!2sNova%20Infissi%20di%20Cenci%20Giuseppe!5e0!3m2!1sen!2sit!4v1690970793364!5m2!1sen!2sit"
					width="100%"
					height="450"
					style="border:0;"
					loading="lazy"
					title="google map"
					referrerpolicy="no-referrer-when-downgrade"
				/>
			</div>
		</div>
	</div>
</section>
