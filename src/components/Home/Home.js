import './Home.css';
import OurClients from '../OurClients/OurClients';

const Home = () => {
	return (
		<>
			<article class="container px-4 py-5" id="hanging-icons">
				<h2 class="pb-2 border-bottom">Servicio imbatible</h2>
				<div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
					<div
						class="col d-flex align-items-start"
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay="200"
					>
						<div class="icon-square bg-light text-dark flex-shrink-0 me-3">
							<i class="fas fa-phone-volume"></i>
						</div>
						<div>
							<h2>Atención personalizada</h2>
							<p>
								Asesoramos individualmente a cada cliente, conociendo sus necesidades y
								brindándole los productos que mejor se adapten a su comercio o negocio.
							</p>
						</div>
					</div>
					<div
						class="col d-flex align-items-start"
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay="700"
					>
						<div class="icon-square bg-light text-dark flex-shrink-0 me-3">
							<i class="fas fa-dollar-sign"></i>
						</div>
						<div>
							<h2>Envío gratis</h2>
							<p>
								Envío sin cargo extra para todos nuestros clientes, tanto mayoristas como
								minoristas. Y sin cupo mínimo de compra.
							</p>
						</div>
					</div>
					<div
						class="col d-flex align-items-start"
						data-aos="fade-up"
						data-aos-duration="1000"
						data-aos-delay="1200"
					>
						<div class="icon-square bg-light text-dark flex-shrink-0 me-3">
							<i class="fas fa-truck"></i>
						</div>
						<div>
							<h2>Envío al interior</h2>
							<p>
								Hacemos envíos a lo largo y ancho de Corrientes. Como Capital, Mburucuya,
								San Lorenzo, Empedrado, Caa Cati, San Miguel, Itaibate, Berón de Astrada,
								Paso de la Patria, Itati.
							</p>
						</div>
					</div>
				</div>
			</article>
			<OurClients />
		</>
	);
};

export default Home;
