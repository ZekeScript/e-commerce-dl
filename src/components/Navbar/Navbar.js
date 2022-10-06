import './Navbar.css';
import { FaHome } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bground-dark">
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
						<Link to="/category/descartables" className="nav-link line-animation fs-5">
							DESCARTABLES
						</Link>
						<Link to="/category/limpieza" className="nav-link line-animation fs-5">
							LIMPIEZA
						</Link>
						<Link to="/category/bazar" className="nav-link line-animation fs-5">
							BAZAR
						</Link>
						<a className="nav-link">
							<CartWidget />
						</a>
					</div>
				</article>
			</section>
		</nav>
	);
};

export default Navbar;
