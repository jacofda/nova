<script lang="ts">
	import emailjs from '@emailjs/browser';

	const submitForm = async (event: any) => {
		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE,
				import.meta.env.VITE_EMAILJS_TEMPLATE,
				event.target,
				import.meta.env.VITE_EMAILJS_KEY
			)
			.then(
				(result) => {
					console.log('SUCCESS!', result.text);
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};
</script>

<svelte:head>
	<title>Contatti</title>
	<meta name="description" content="contatti" />
</svelte:head>

<section class="py-5">
	<div class="container">
		<div class="row">
			<div class="col-md-8 pe-md-5">
				<h1 class="mb-2">Contatti</h1>
				<p>
					Non esitare a contattarci per ogni tipo di richiesta o informazione. Sempre pronti a darti
					una risposta!
				</p>
				<form on:submit|preventDefault={submitForm}>
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

					<div class="mb-3">
						<button class="btn btn-primary" type="submit">Invia richiesta</button>
					</div>
				</form>
			</div>
			<div class="col-md-4 ps-md-5 border-start">
				<h3 class="mb-3">Dove siamo</h3>
			</div>
		</div>
	</div>
</section>
