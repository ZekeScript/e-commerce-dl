import './Checkout.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import {
	addDoc,
	collection,
	getDocs,
	where,
	query,
	documentId,
	writeBatch,
} from 'firebase/firestore';
import { db } from '../../services/firebase';
import { toast, ToastContainer } from 'react-toastify';

const Checkout = () => {
	const [loading, setLoading] = useState(false);
	const { cart, total, clearCart } = useContext(CartContext);

	const [formName, setFormName] = useState('');
	const handleName = (e) => {
		setFormName(e.target.value);
	};

	const [formEmail, setFormEmail] = useState('');
	const handleEmail = (e) => {
		setFormEmail(e.target.value);
	};

	const [formPhone, setFormPhone] = useState('');
	const handlePhone = (e) => {
		setFormPhone(e.target.value);
	};

	const [formAddress, setFormAddress] = useState('');
	const handleAddress = (e) => {
		setFormAddress(e.target.value);
	};

	const notifySuccessBuy = () => {
		toast.success('Su compra fue exitosa!');
	};

	const createOrder = async () => {
		setLoading(true);
		try {
			const objOrder = {
				buyer: {
					name: formName,
					email: formEmail,
					phone: formPhone,
					address: formAddress,
				},
				items: cart,
				total,
			};

			const ids = cart.map((prod) => prod.id);
			const productsRef = collection(db, 'products');

			const productAddedFromFirestore = await getDocs(
				query(productsRef, where(documentId(), 'in', ids))
			);
			const { docs } = productAddedFromFirestore;

			const batch = writeBatch(db);
			const outOfStock = [];

			docs.forEach((doc) => {
				const dataDoc = doc.data();
				const stockDb = dataDoc.stock;

				const productAddedToCart = cart.find((prod) => prod.id === doc.id);
				const prodQuantity = productAddedToCart?.quantity;

				if (stockDb >= prodQuantity) {
					batch.update(doc.ref, { stock: stockDb - prodQuantity });
				} else {
					outOfStock.push({ id: doc.id, ...dataDoc });
				}
			});
			if (outOfStock.length === 0) {
				await batch.commit();

				const orderRef = collection(db, 'orders');
				const orderAdded = await addDoc(orderRef, objOrder);

				console.log(`El id de su orden es: ${orderAdded.id}`);
				clearCart();
			} else {
				console.log('hay productos fuera de stock');
			}
			console.log(objOrder);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
      notifySuccessBuy();
      
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		createOrder();
	};

	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center loading">
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	return (
		<div className="container mt-5 mb-5">
			<div className="py-5 text-center">
				<h2>Checkout form</h2>
				<p className="lead">
					Each required form group has a validation state that can be triggered by
					attempting to submit the form without completing it.
				</p>
			</div>

			<div className="row g-5 justify-content-center">
				<div className="col-md-7 col-lg-8">
					<h4 className="mb-3">Billing address</h4>
					<form className="needs-validation">
						<div className="row g-3">
							<div className="col-sm-6">
								<label htmlFor="firstName" className="form-label">
									Name
								</label>
								<input
									type="text"
									className="form-control"
									id="firstName"
									placeholder=""
									value={formName}
									onChange={handleName}
									required
								/>
								<div className="invalid-feedback">Valid name is required.</div>
							</div>

							<div className="col-sm-6">
								<label htmlFor="email" className="form-label">
									Email
								</label>
								<input
									onChange={handleEmail}
									value={formEmail}
									type="email"
									className="form-control"
									id="email"
									placeholder="you@example.com"
								/>
								<div className="invalid-feedback">
									Please enter a valid email address for shipping updates.
								</div>
							</div>

							<div className="col-3">
								<label htmlFor="phone" className="form-label">
									Phone
								</label>
								<input
									onChange={handlePhone}
									value={formPhone}
									type="text"
									className="form-control"
									id="phone"
									placeholder="123456789"
									required
								/>
								<div className="invalid-feedback">
									Please enter your shipping address.
								</div>
							</div>

							<div className="col-8">
								<label htmlFor="address" className="form-label">
									Address
								</label>
								<input
									onChange={handleAddress}
									value={formAddress}
									type="text"
									className="form-control"
									id="address"
									placeholder="1234 Main St"
									required
								/>
								<div className="invalid-feedback">
									Please enter your shipping address.
								</div>
							</div>
						</div>

						<hr className="my-4" />

						<button
							onClick={handleSubmit}
							type="submit"
							className="w-100 btn btn-primary btn-lg"
						>
							Continue to checkout
						</button>
					</form>
					<ToastContainer
						position="top-right"
						autoClose={2000}
						hideProgressBar={true}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
					/>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
