import './CartWidget.css';
import { IoMdCart } from 'react-icons/io';

const CartWidget = () => {
	return (
		<div className="cart-widget">
			<div class="position-relative">
				<IoMdCart className="cartIcon" />
				<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-warning badge-font">
					2<span class="visually-hidden">unread messages</span>
				</span>
			</div>
		</div>
	);
};

export default CartWidget;
