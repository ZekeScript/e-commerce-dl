import './BrandPresentation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

AOS.init();

const BrandPresentation = () => {
	return (
		<section className="welcome">
			<article className="sponge" data-aos="fade-up-left" data-aos-duration="1000">
				<img
					className="img-fluid"
					alt="sponge"
					src="https://raw.githubusercontent.com/estga/super-chainsaw/main/images/rectangle-sponge.png"
				/>
			</article>
			<article className="plasticbag" data-aos="fade-up-right" data-aos-duration="1000">
				<img
					className="img-fluid"
					alt="pastic bag"
					src="https://raw.githubusercontent.com/estga/super-chainsaw/main/images/plastic-bag.png"
				/>
			</article>
			<article className="welcome__center">
				<div
					className="presentation"
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-delay="1000"
				>
					<h1 className="display-1">
						Distribuidora <br /> Luicho
					</h1>
					<h2 className="display-6">
						La mejor calidad, <br /> al mejor precio.
					</h2>
				</div>
				<img
					className="pizzabox img-fluid"
					data-aos="flip-left"
					data-aos-duration="1500"
					data-aos-delay="600"
					alt="pizza box"
					src="https://raw.githubusercontent.com/estga/super-chainsaw/main/images/pizza-boxes.png"
				/>
			</article>
			<article className="socialmedia">
				<div
					className="socialmedia__facebook"
					data-aos="fade-up"
					data-aos-duration="500"
					data-aos-delay="1250"
				>
					<a
						href="https://www.facebook.com/DistribuidoraLuicho"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-facebook">
							<BsFacebook />
						</i>
					</a>
				</div>
				<div
					className="socialmedia__instagram"
					data-aos="fade-up"
					data-aos-duration="500"
					data-aos-delay="1500"
				>
					<a
						href="https://www.instagram.com/distribuidoraluicho_/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-instagram">
							<BsInstagram />
						</i>
					</a>
				</div>
				<div
					className="socialmedia__whatsapp"
					data-aos="fade-up"
					data-aos-duration="500"
					data-aos-delay="1750"
				>
					<a
						href="https://wa.me/543794335737/?text=Me%20interesa%20el%20producto"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-whatsapp">
							<BsWhatsapp />
						</i>
					</a>
				</div>
				<div
					className="socialmedia__mail"
					data-aos="fade-up"
					data-aos-duration="500"
					data-aos-delay="2000"
				>
					<a href="mailto:Distribuidoraluicho@yahoo.com" target="_blank" rel="noreferrer">
						<i className="fas fa-envelope-open-text">
							<FiMail />
						</i>
					</a>
				</div>
			</article>
		</section>
	);
};

export default BrandPresentation;
