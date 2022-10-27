import './Faqs.css';

const Faqs = () => {
	return (
		<>
			<div class="faqs">
				<section class="px-4 pt-5 my-5 text-center">
					<h1 class="display-4 fw-bold">FAQS</h1>
					<article class="col-lg-6 mx-auto">
						<p class="lead mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minus
							quibusdam soluta? Dolores, laborum laboriosam molestiae deleniti asperiores
							commodi. Nihil sint exercitationem dolores! Saepe officiis tempore quia, vel
							et voluptatem fugiat voluptatibus. Porro quo ad voluptas facere quae, dolor,
							ipsam consectetur nulla tempore minima cupiditate, voluptatem consequatur
							officia quos laborum.
						</p>
					</article>
					<article class="overflow-hidden faqs_img">
						<div class="container px-5">
							<img
								src="https://raw.githubusercontent.com/estga/super-chainsaw/main/images/faqs.jpg"
								class="img-fluid border rounded-3 shadow-lg mb-4"
								alt="faq"
								width="700"
								height="500"
								loading="lazy"
							/>
						</div>
					</article>
				</section>

				<section class="detail d-flex container-xxl">
					<article
						class="bulto__abierto"
						data-aos="fade-right"
						data-aos-duration="1500"
						data-aos-anchor-placement="top-center"
					>
						<h2>Compras por bulto abierto</h2>
						<h3>Ideal para lanzar tu emprendimiento</h3>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos inventore
							sequi quibusdam? Assumenda id, repellat deleniti cum voluptas magnam fugit
							sed neque dolorem aspernatur quam eveniet voluptatum quis ullam maiores!
						</p>
						<h3>Menor inversion inicial</h3>
						<hr />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima error
							doloremque debitis consequatur, animi cumque est nihil adipisci recusandae
							dolores, asperiores, voluptatibus deleniti in eos quas? Modi labore incidunt
							veritatis.
						</p>
						<h3>Compra minima requerida</h3>
						<hr />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ratione
							repellendus itaque vitae. A delectus nesciunt, magni quibusdam eius totam
							eaque? Odit, similique! Facere commodi fuga cum voluptatum maiores quos!
						</p>
						<h3>Retiro en sucursal</h3>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum id eaque iure
							sint aperiam, quas quo ab repellat ipsum ea reprehenderit quisquam omnis
							eveniet aliquam, hic assumenda libero magni asperiores.
						</p>
					</article>
					<article
						class="bulto__cerrado"
						data-aos="fade-left"
						data-aos-duration="1500"
						data-aos-anchor-placement="top-center"
					>
						<h2>Compras por bulto cerrado</h2>
						<h3>Mayor rentabilidad</h3>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestias
							commodi dicta minima eius aperiam error earum sit pariatur et porro
							corporis, itaque quae temporibus quis nihil officiis, quam amet.
						</p>
						<h3>Mayor disponibilidad de stock</h3>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum quam
							nisi necessitatibus deserunt totam incidunt excepturi perferendis deleniti
							ex. Asperiores perferendis soluta qui minima reiciendis a accusantium
							doloribus quaerat!
						</p>
						<h3>Compra minima requerida</h3>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
							temporibus ipsa. Reiciendis quae quis nemo distinctio corporis ea
							consequuntur, eaque quo exercitationem reprehenderit nisi cum! Veritatis
							necessitatibus cumque repellendus adipisci.
						</p>
						<h3>Retiro en sucursal</h3>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in vero
							sapiente ipsam nisi? Assumenda, rerum voluptates nobis provident
							consequuntur id! Possimus, sequi necessitatibus quos quidem veniam ipsa
							corrupti sed?
						</p>
					</article>
				</section>
			</div>
		</>
	);
};

export default Faqs;
