import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, description, price, stock, thumbnail }) => {
	const [quantityToAdd, setQuantityToAdd] = useState(0);
	const { addItem, getProductQuantity } = useContext(CartContext);

	const handleOnAdd = (quantity) => {
		setQuantityToAdd(quantity);

		const productToAdd = {
			id,
			name,
			price,
			quantity,
			thumbnail,
		};

		addItem(productToAdd);
	};

	const productAddedQuantity = getProductQuantity(id);
	console.log(productAddedQuantity);

	return (
		<article className="container item-detail">
			<div className="card">
				<div className="row g-5">
					<div className="col">
						<img src={img} className="rounded-start" alt="product-img" />
					</div>
					<div className="col">
						<div className="row">
							<div className="card-body" key={id}>
								<h2 className="card-title">{name}</h2>
								<p className="card-text">{description}</p>
								<p className="card-text text-center">
									<small className="text-muted">Stock: {stock}</small>
								</p>
								<p className="card-text fs-1 text-center">${price}</p>
							</div>
						</div>
						<div className="">
							{quantityToAdd === 0 ? (
								<ItemCount
									onAdd={handleOnAdd}
									stock={stock}
									initial={productAddedQuantity}
								/>
							) : (
								<div>
									<div className="p-2 mt-5 text-center">
										<div
											className="btn-group"
											role="group"
											aria-label="Default button group"
										>
											<div>
												<Link
													to={'/cart'}
													type="button"
													className="btn btn-outline-primary"
												>
													Ir al carrito
												</Link>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default ItemDetail;
