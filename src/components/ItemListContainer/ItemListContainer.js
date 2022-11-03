import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../asyncMock';

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();
	console.log(categoryId);

	useEffect(() => {
		setLoading(true);
		if (!categoryId) {
			getProducts()
				.then((res) => {
					console.log(res);
					setProducts(res);
				})
				.catch((error) => {
					console.log(error);
					setError(true);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			getProductsByCategory(categoryId)
				.then((res) => {
					console.log(res);
					setProducts(res);
				})
				.catch((error) => {
					console.log(error);
					setError(true);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [categoryId]);

	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center loading">
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	if (error) {
		return <h1>Hubo un error</h1>;
	}

	return (
		<div className="container p-5 mt-5">
			<div>
				<h1>{greeting}</h1>
				<div>
					<ItemList products={products} />
				</div>
			</div>
		</div>
	);
};

export default ItemListContainer;
