<script>
	import { Col, Row, Figure, Image } from 'sveltestrap';
	import ServiziDetails from './ServiziDetails.svelte';
</script>

<section class="py-5">
	<div class="container">
		<Row>
			<div class="col-md-6 col-lg-4">
				<ServiziDetails
					iconName={'check-circle-fill'}
					title={'Qualità'}
					text={'Sempre al passo con i tempi e pronti a curare ogni minimo particolare. Non esistono dettagli insignificanti.'}
				/>

				<ServiziDetails
					iconName={'snow3'}
					title={'Isolazione Termica'}
					text={'Tutti i nostri prodotti sono certificati e costruiti per avere un isolazione termica ed acustica al massimo delle prestazioni.'}
				/>

				<ServiziDetails
					iconName={'tree'}
					title={'Naturale'}
					text={'Disponiamo di soluzioni che rispettano norme vigenti e il nostro pianeta. Origine e lavorazione dei materiali controllata.'}
				/>

				<ServiziDetails
					iconName={'brush'}
					title={'Qualsiasi cromazione'}
					text={'Offriamo una vasta gamma di colori su tutti i nostri prodotti in modo da riuscire a trovare sempre una giusta cromazione per tutta la casa.'}
				/>
			</div>
			<div class="col-md-6 col-lg-4 text-center">
				<img
					src="https://www.novainfissi.it/public/img/centrale-1.png"
					class="img-fluid"
					alt="ospedaletto porte"
				/>
			</div>
			<div class="col-md-6 col-lg-4">
				<ServiziDetails
					orientation={'text-start'}
					iconName={'sliders'}
					title={'Soluzioni Personalizzate'}
					text={'Il nostro forte è darvi la soluzione ottimale per qualsiasi esigenza. Personalizzazioni specifiche per ogni richiesta.'}
				/>
				<ServiziDetails
					orientation={'text-start'}
					iconName={'shield-lock'}
					title={'Sicurezza'}
					text={'Punti di ancoraggio o sistemi d’allarme installati direttamente sull’infisso (ormai quasi di serie).'}
				/>

				<ServiziDetails
					orientation={'text-start'}
					iconName={'file-text-fill'}
					title={'Garanzia'}
					text={'Prodotti garantiti per la durata nel tempo. Inoltre vantiamo di un’assistenza molto efficace e veloce.'}
				/>

				<ServiziDetails
					orientation={'text-start'}
					iconName={'phone-landscape'}
					title={'Apertura a distanza'}
					text={'Controlli a portata di mano. La domotica è una realtà, ma non viene ancora sfruttata pienamente ... contattaci per avere più informazioni.'}
				/>
			</div>
		</Row>
	</div>
</section>
