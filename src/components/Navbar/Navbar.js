import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bground-dark fixed-top">
			<section className="container-fluid nav-wrapper justify-content-evenly">
				<article className="navbar-wrapper-brand brand">
					<Link to="/">
						<img
							width="80"
							height="80"
							alt="DL logo"
							className="d-inline-block align-text-top"
							src="https://raw.githubusercontent.com/estga/super-chainsaw/main/images/DL_logo.png"
						/>
					</Link>
				</article>
				<article className="navbar-wrapper-toggle">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</article>
				<article
					className="collapse navbar-collapse bground-dark"
					id="navbarNavAltMarkup"
				>
					<div className="navbar-nav">
						<Link to="/quienes_somos" className="nav-link line-animation fs-5">
							Quienes Somos
						</Link>
						<Link to="/products" className="nav-link line-animation fs-5">
							Productos
						</Link>
						<Link to="/faqs" className="nav-link line-animation fs-5">
							Faqs
						</Link>
						<i className="nav-link">
							<CartWidget />
						</i>
					</div>
				</article>
			</section>
		</nav>
	);
};

export default Navbar;
