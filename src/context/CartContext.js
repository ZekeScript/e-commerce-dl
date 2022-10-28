import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	console.log(cart);

	const isInCart = (id) => {
		return cart.some((prod) => prod.id === id);
	};

	const addItem = (productToAdd) => {
		if (!isInCart(productToAdd.id)) {
			setCart([...cart, productToAdd]);
		}
	};

	const removeItem = (id) => {
		const cartFiltered = cart.filter((prod) => prod.id !== id);
		setCart(cartFiltered);
	};

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem }}>
			{children}
		</CartContext.Provider>
	);
};
