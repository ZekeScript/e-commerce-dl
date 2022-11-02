import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
	const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

	if (totalQuantity === 0) {
		return <h1>No hay items en el carrito</h1>;
	}

	return (
		<div>
			<h1 className="display-1 text-center mt-5 mb-4">Cart</h1>
			{cart.map((p) => (
				<CartItem key={p.id} {...p} />
			))}
			<p className="display-4 text-center mt-4">Total: ${total}</p>
			<div className='text-center mb-5'>
			  <button onClick={() => clearCart()} className="btn btn-danger">
  				Limpiar carrito
  			</button>
			</div>
		</div>
	);
};

export default Cart;
