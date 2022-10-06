import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const { productId } = useParams();

	useEffect(() => {
		getProduct(productId)
			.then((res) => {
				setProduct(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

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
