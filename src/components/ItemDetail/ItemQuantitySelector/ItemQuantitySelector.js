import './ItemQuantitySelector.css';
import { useState } from 'react';

const ItemQuantitySelector = ({ stock = 0, initial = 1, onAdd }) => {
	const [quantity, setQuantity] = useState(initial);

	const decrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	const increment = () => {
		if (quantity < stock) {
			setQuantity(quantity + 1);
		}
	};

	return (
		<div className="p-2 mt-5 text-center">
			<div className="d-flex justify-content-around" role="group" aria-label="Default button group">
				<div className="border rounded-3 border-1 flex-grow-1 d-flex justify-content-around me-3">
					<button className="btn" type="button" onClick={decrement}>
						-
					</button>
					<button className="btn">{quantity}</button>
					<button className="btn" type="button" onClick={increment}>
						+
					</button>
				</div>
				<div>
					<button
						type="button"
						className="btn btn-outline-primary"
						onClick={() => onAdd(quantity)}
					>
						Agregar al carrito
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemQuantitySelector;
