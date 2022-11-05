import './CartItem.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';

const CartItem = ({ id, thumbnail, name, quantity, price }) => {
	const { removeItem } = useContext(CartContext);

	const handleRemove = (id) => {
		removeItem(id);
	};

	return (
		<article className="container text-center mb-2 pb-2 border-bottom">
			<div className="row">
				<div className="col">
					<img src={thumbnail} className="col s-img rounded" alt="cart-img" />
				</div>
				<p className="col h4 align-self-center">{name}</p>
				<p className="col h5 align-self-center">Cantidad: {quantity}</p>
				<p className="col h5 align-self-center">Precio: ${price}</p>
				<p className="col h5 align-self-center">Subtotal: ${price * quantity}</p>
				<div className="col align-self-center">
					<button onClick={() => handleRemove(id)} className="btn-close" />
				</div>
			</div>
		</article>
	);
};

export default CartItem;
