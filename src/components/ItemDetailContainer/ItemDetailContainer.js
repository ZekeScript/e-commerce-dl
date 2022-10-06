import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncMock';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProduct('2')
			.then((res) => {
				setProduct(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	console.log(fetch(''));
	console.log(product);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>Detalle de producto</h1>
			{/* <ItemDetail {...product} /> */}
			<div>{product?.name}</div>
		</div>
	);
};

export default ItemDetailContainer;
