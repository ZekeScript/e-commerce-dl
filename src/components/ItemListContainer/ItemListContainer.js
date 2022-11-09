import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = ({ greeting }) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { categoryId } = useParams();
	console.log(categoryId);

	useEffect(() => {
		setLoading(true);

		const collectionRef = categoryId
			? query(collection(db, 'products'), where('category', '==', categoryId))
			: collection(db, 'products');
		getDocs(collectionRef)
			.then((res) => {
				console.log(res);

				const productsAdapted = res.docs.map((doc) => {
					const data = doc.data();
					return { id: doc.id, ...data };
				});

				setProducts(productsAdapted);
			})
			.catch((error) => {
				console.log(error);
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
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
