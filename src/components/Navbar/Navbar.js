import './Navbar.css';
import { FaHome } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bground-dark">
			<section className="container-fluid nav-wrapper justify-content-evenly">
				<article className="navbar-wrapper-brand brand">
					<a className="navbar-brand" href="#">
						<img
							width="80"
							height="80"
							alt="DL logo"
							className="d-inline-block align-text-top"
							src="https://raw.githubusercontent.com/estga/super-chainsaw/main/images/DL_logo.png"
						/>
					</a>
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
				<article className="collapse navbar-collapse bground-dark" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link active disabled fs-5" aria-current="page" href="#">
							<FaHome />
						</a>
						<a className="nav-link line-animation fs-5" href="#">
							ABOUT
						</a>
						<a className="nav-link line-animation fs-5" href="#">
							PRODUCTS
						</a>
						<a className="nav-link line-animation fs-5" href="#">
							CONTACT US
						</a>
						<a className="nav-link lne-animatiion active fs-5 ms-1" href="#">
							<CartWidget />
						</a>
					</div>
				</article>
			</section>
		</nav>
	);
};

export default Navbar;
