import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncMock';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

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
	});

	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center loading">
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	return (
		<div>
			<ItemDetail {...product} />
		</div>
	);
};

export default ItemDetailContainer;
