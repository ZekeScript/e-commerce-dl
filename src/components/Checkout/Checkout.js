import './Checkout.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
	const { cart, total } = useContext(CartContext);

	const objOrder = {
		buyer: {
			name: 'Ezequiel Estigarribia',
			email: 'est@hotmail.com',
			phone: '12345678',
			address: '1234 Main St',
		},
		items: cart,
		total,
	};

	console.log(objOrder);

	return (
		<div className="container mt-5 mb-5">
			<div class="py-5 text-center">
				<h2>Checkout form</h2>
				<p class="lead">
					Each required form group has a validation state that can be triggered by
					attempting to submit the form without completing it.
				</p>
			</div>

			<div class="row g-5 justify-content-center">
				<div class="col-md-7 col-lg-8">
					<h4 class="mb-3">Billing address</h4>
					<form class="needs-validation" novalidate>
						<div class="row g-3">
							<div class="col-sm-6">
								<label for="firstName" class="form-label">
									First name
								</label>
								<input
									type="text"
									class="form-control"
									id="firstName"
									placeholder=""
									value=""
									required
								/>
								<div class="invalid-feedback">Valid first name is required.</div>
							</div>

							<div class="col-sm-6">
								<label for="email" class="form-label">
									Email
								</label>
								<input
									type="email"
									class="form-control"
									id="email"
									placeholder="you@example.com"
								/>
								<div class="invalid-feedback">
									Please enter a valid email address for shipping updates.
								</div>
							</div>

							<div class="col-3">
								<label for="phone" class="form-label">
									Phone
								</label>
								<input
									type="text"
									class="form-control"
									id="phone"
									placeholder="123456789"
									required
								/>
								<div class="invalid-feedback">Please enter your shipping address.</div>
							</div>

							<div class="col-8">
								<label for="address" class="form-label">
									Address
								</label>
								<input
									type="text"
									class="form-control"
									id="address"
									placeholder="1234 Main St"
									required
								/>
								<div class="invalid-feedback">Please enter your shipping address.</div>
							</div>
						</div>

						<hr class="my-4" />

						<button class="w-100 btn btn-primary btn-lg" type="submit">
							Continue to checkout
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
