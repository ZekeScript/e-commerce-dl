import './ItemDetailContainer.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	const { productId } = useParams();

	useEffect(() => {
		const docRef = doc(db, 'products', productId);

		getDoc(docRef)
			.then((doc) => {
				const data = doc.data();
				const productAdapted = { id: doc.id, ...data };
				setProduct(productAdapted);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [productId]);

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
