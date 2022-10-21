import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
	const [quantityToAdd, setQuantityToAdd] = useState(0);

	const handleOnAdd = (quantity) => {
		console.log(quantity);
		setQuantityToAdd(quantity);
	};

	return (
		<article className="container item-detail">
			<div className="card">
				<div className="row g-5">
					<div className="col">
						<img src={product.img} className="rounded-start" alt="product-img" />
					</div>
					<div className="col">
						<div className="row">
							<div className="card-body" key={product.id}>
								<h2 className="card-title">{product.name}</h2>
								<p className="card-text">{product.description}</p>
								<p class="card-text text-center">
									<small class="text-muted">Stock: {product.stock}</small>
								</p>
								<p className="card-text fs-1 text-center">${product.price}</p>
							</div>
						</div>
						<div className="">
							{quantityToAdd === 0 ? (
								<ItemCount onConfirm={handleOnAdd} stock={product.stock} />
							) : (
								<Link to={'/cart'}>Finalizar compra</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default ItemDetail;
