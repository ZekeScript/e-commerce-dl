import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log(
			getProducts()
				.then((res) => {
					console.log(res);
					setProducts(res);
				})
				.catch((error) => {
					console.log(error);
					setError(true);
				})
				.finally(() => setLoading(false))
		);
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>Hubo un error</h1>;
	}

	return (
		<div>
			<h1>{greeting}</h1>
			<div>
				<ItemList products={products} />
			</div>
		</div>
	);
};

export default ItemListContainer;
