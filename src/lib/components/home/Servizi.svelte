<script>
	import { Col, Row, Figure, Image } from 'sveltestrap';
	import ServiziDetails from './ServiziDetails.svelte';
</script>

<section class="py-5">
	<div class="container">
		<Row>
			<div class="col-sm-6 col-md-4">
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
					iconName={'leaf'}
					title={'Naturale'}
					text={'Disponiamo di soluzioni che rispettano norme vigenti e il nostro pianeta. Origine e lavorazione dei materiali controllata.'}
				/>

				<div
					class="icon-box-3 icon-right clearfix object-non-visible animated object-visible fadeInLeftSmall"
					data-animation-effect="fadeInLeftSmall"
					data-effect-delay="200"
				>
					<i class="fa fa-leaf" />
					<div class="text">
						<h4>Naturale</h4>
						<p class="small">
							Disponiamo di soluzioni che rispettano norme vigenti e il nostro pianeta. Origine e
							lavorazione dei materiali controllata.
						</p>
					</div>
				</div>
				<div
					class="icon-box-3 icon-right clearfix object-non-visible animated object-visible fadeInLeftSmall"
					data-animation-effect="fadeInLeftSmall"
					data-effect-delay="300"
				>
					<i class="fa fa-paint-brush" />
					<div class="text">
						<h4>Qualsiasi cromazione</h4>
						<p class="small">
							Offriamo una vasta gamma di colori su tutti i nostri prodotti in modo da riuscire a
							trovare sempre una giusta cromazione per tutta la casa.
						</p>
					</div>
				</div>
			</div>
		</Row>
	</div>
</section>
