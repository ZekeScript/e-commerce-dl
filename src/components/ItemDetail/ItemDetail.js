import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
	console.log(`este es el producto ${product}`);
	return (
		<div className="container">
			<h1>Detalle de producto</h1>
			<div className="card m-4" key={product.id}>
				<div className="card-body">
					<h5 className="card-title">{product.name}</h5>
					<p className="card-text">{product.description}</p>
				</div>
				<img src={product.img} className="card-img-bottom" alt="card-img-bottom" />
			</div>
			<div>
				<ItemCount stock={5} />
			</div>
		</div>
	);
};

export default ItemDetail;
