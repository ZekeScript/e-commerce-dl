import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock }) => {
	const [countCart, setCount] = useState(0);

	const decrement = () => {
		if (countCart > 0) {
			setCount(countCart - 1);
		}
	};

	const increment = () => {
		if (countCart < stock) {
			setCount(countCart + 1);
		}
	};
	const reset = () => {
		setCount(0);
	};

	const handleOnAdd = () => console.log(`agragaste ${countCart} items al carrito`);

	return (
		<div class="container w-50 bg-cream p-2">
			<div class="btn-group d-flex" role="group" aria-label="Default button group">
				<div class="flex-grow-1">Sobre papel</div>
				<div class="border rounded-3 border-1">
					<button class="btn" type="button" onClick={decrement}>
						-
					</button>
					<button class="btn pe-5 ps-5" onClick={reset}>
						{countCart}
					</button>
					<button class="btn" type="button" onClick={increment}>
						+
					</button>
				</div>
				<div>
					<button
						type="button"
						class="btn btn-outline-primary ms-4"
						onClick={handleOnAdd}
					>
						Agregar al carrito
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemCount;
