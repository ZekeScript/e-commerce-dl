import './Navbar.css';
import { FaHome } from 'react-icons/fa';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-md navbar-dark bground-dark">
			<section class="container-fluid nav-wrapper justify-content-evenly">
				<article class="navbar-wrapper-brand brand">
					<a class="navbar-brand" href="#">
						<img
							width="80"
							height="80"
							alt="DL logo"
							class="d-inline-block align-text-top"
							src="https://raw.githubusercontent.com/estga/super-chainsaw/main/images/DL_logo.png"
						/>
					</a>
				</article>
				<article class="navbar-wrapper-toggle">
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
				</article>
				<article class="collapse navbar-collapse bground-dark" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<a class="nav-link active disabled fs-5" aria-current="page" href="#">
							<FaHome />
						</a>
						<a class="nav-link line-animation fs-5" href="#">
							ABOUT
						</a>
						<a class="nav-link line-animation fs-5" href="#">
							PRODUCTS
						</a>
						<a class="nav-link line-animation fs-5" href="#">
							CONTACT US
						</a>
						<a class="nav-link lne-animatiion active fs-5 ms-1" href="#">
							<CartWidget />
						</a>
					</div>
				</article>
			</section>
		</nav>
	);
};

export default Navbar;
