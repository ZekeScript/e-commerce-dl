import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
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

	const reset = () => {
		setQuantity(0);
	};

	return (
		<div className="p-2 mt-5 text-center">
			<div className="btn-group" role="group" aria-label="Default button group">
				<div className="border rounded-3 border-1">
					<button className="btn" type="button" onClick={decrement}>
						-
					</button>
					<button className="btn pe-5 ps-5" onClick={reset}>
						{quantity}
					</button>
					<button className="btn" type="button" onClick={increment}>
						+
					</button>
				</div>
				<div>
					<button
						type="button"
						className="btn btn-outline-primary ms-4"
						onClick={() => onAdd(quantity)}
					>
						Agregar al carrito
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCount;
