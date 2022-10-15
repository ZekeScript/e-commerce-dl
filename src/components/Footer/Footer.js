import './Footer.css';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
	return (
		<footer className="footer">
			<section className="footer__wrapper d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
				<article className="footer__menu col-md-4 d-flex align-items-center">
					<a
						className="footer__link mb-3 me-2 mb-md-0 text-decoration-none lh-1"
						href="/"
						rel="noopener noreferrer"
					>
						Quienes somos
					</a>
					<a
						className="footer__link mb-3 me-2 mb-md-0 text-decoration-none lh-1"
						href="/"
						rel="noopener noreferrer"
					>
						Productos
					</a>
					<a
						className="footer__link mb-3 me-2 mb-md-0 text-decoration-none lh-1"
						href="/"
						rel="noopener noreferrer"
					>
						FAQS
					</a>
					<a
						className="footer__link mb-3 me-2 mb-md-0 text-decoration-none lh-1"
						href="/"
						rel="noopener noreferrer"
					>
						Terminos y condiciones
					</a>
				</article>
				<ul className="footer__socialmedia nav col-md-4 justify-content-center list-unstyled d-flex col-6 offset-1">
					<li className="socialmedia__facebook ms-3">
						<a
							href="https://www.facebook.com/DistribuidoraLuicho"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-facebook">
								<BsFacebook />
							</i>
						</a>
					</li>
					<li className="socialmedia__instagram ms-3">
						<a
							href="https://www.instagram.com/distribuidoraluicho_/"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-instagram">
								<BsInstagram />
							</i>
						</a>
					</li>
					<li className="socialmedia__whatsapp ms-3">
						<a
							href="https://wa.me/543794335737/?text=Me%20interesa%20el%20producto"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-whatsapp">
								<BsWhatsapp />
							</i>
						</a>
					</li>
					<li className="socialmedia__mail ms-3">
						<a
							href="mailto:Distribuidoraluicho@yahoo.com"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fas fa-envelope-open-text">
								<FiMail />
							</i>
						</a>
					</li>
				</ul>
			</section>
			<hr />
			<section className="footer__mark">
				<p>
					<i className="fas fa-bolt"></i> by
					<a href="https://github.com/ezEst6" target="_blank" rel="noreferrer">
						@ezEst
					</a>
				</p>
			</section>
		</footer>
	);
};

export default Footer;
