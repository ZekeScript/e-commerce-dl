import './CartWidget.css';
import { IoMdCart } from 'react-icons/io';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
	const { totalQuantity } = useContext(CartContext);

	return (
		<div className="cart-widget cart">
			<Link to="/cart" className="btn btn-outline-warning position-relative">
				<IoMdCart className="cartIcon" />
				{totalQuantity > 0 && (
					<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-yellow">
						{totalQuantity}
						<span className="visually-hidden">cart items</span>
					</span>
				)}
			</Link>
		</div>
	);
};

export default CartWidget;
