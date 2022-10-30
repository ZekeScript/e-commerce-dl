import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [totalQuantity, setTotalQuantity] = useState(0);
	console.log(cart);

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	const addItem = (productToAdd) => {
		if (!isInCart(productToAdd.id)) {
			setCart([...cart, productToAdd]);
		} else {
			console.log('Este item ya se encuentra en el carrito');
		}
	};

	const removeItem = (id) => {
		const cartFiltered = cart.filter((prod) => prod.id !== id);
		setCart(cartFiltered);
	};

	useEffect(() => {
		const totalQuantity = getTotalQuantity();
		setTotalQuantity(totalQuantity);
	}, [cart]);

	const getTotalQuantity = () => {
		let totalQuantity = 0;

		cart.forEach((prod) => {
			totalQuantity += prod.quantity;
		});

		return totalQuantity;
	};

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
			{children}
		</CartContext.Provider>
	);
};
