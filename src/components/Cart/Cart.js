import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
	const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

	if (totalQuantity === 0) {
		return (
			<div className="px-4 py-5 my-5 text-center">
				<h1 className="display-5 fw-bold">Your cart is empty</h1>
				<div className="col-lg-6 mx-auto">
					<p className="lead mb-4">Click the button bellow to see more products.</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<Link to="/products" className="btn btn-primary btn-lg px-4 gap-3">
							Products
						</Link>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h1 className="display-1 text-center mt-5 mb-4">Cart</h1>
			<div className="text-center mb-5">
				<Link to="/products" className="btn btn-outline-primary">
					Seguir comprando
				</Link>
			</div>
			<div className="container border rounded pt-3">
				<div className="text-end">
					<button onClick={() => clearCart()} className="btn btn-outline-danger mb-4">
						X
					</button>
				</div>
				{cart.map((p) => (
					<CartItem key={p.id} {...p} />
				))}
			</div>
			<p className="display-4 text-center mt-5 mb-5">Total: ${total}</p>
			<div className="text-center mb-5">
				<Link to="/checkout" className="btn btn-outline-primary">
					Checkout
				</Link>
			</div>
		</div>
	);
};

export default Cart;
