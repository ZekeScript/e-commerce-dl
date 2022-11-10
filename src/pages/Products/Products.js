import { NavLink } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../services/firebase';

const Products = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const collectionRef = query(collection(db, 'categories'), orderBy('pos'));

		getDocs(collectionRef).then((res) => {
			const categoriesAdapted = res.docs.map((doc) => {
				const data = doc.data();
				return { id: doc.id, ...data };
			});

			setCategories(categoriesAdapted);
		});
	}, []);

	return (
		<>
			<div className="nav justify-content-center mt-5">
				{categories.map((cat) => (
					<NavLink
						key={cat.id}
						to={`/products/category/${cat.slug}`}
						className={({ isActive }) =>
							isActive
								? 'btn btn-outline-primary fs-5 active me-4'
								: 'btn btn-outline-primary fs-5 me-4'
						}
					>
						{cat.label}
					</NavLink>
				))}
			</div>
			<ItemListContainer />
		</>
	);
};

export default Products;
