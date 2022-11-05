import { NavLink } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const Products = () => {
	return (
		<>
			<div className="nav justify-content-center mt-5">
				<NavLink
					to="/products/category/descartables"
					className={({ isActive }) =>
						isActive
							? 'btn btn-outline-primary fs-5 active me-4'
							: 'btn btn-outline-primary fs-5 me-4'
					}
				>
					DESCARTABLES
				</NavLink>
				<NavLink
					to="/products/category/limpieza"
					className={({ isActive }) =>
						isActive
							? 'btn btn-outline-primary fs-5 active me-4'
							: 'btn btn-outline-primary fs-5 me-4'
					}
				>
					LIMPIEZA
				</NavLink>
				<NavLink
					to="/products/category/bazar"
					className={({ isActive }) =>
						isActive
							? 'btn btn-outline-primary fs-5 active me-4'
							: 'btn btn-outline-primary fs-5 me-4'
					}
				>
					BAZAR
				</NavLink>
			</div>
			<ItemListContainer />
		</>
	);
};

export default Products;
