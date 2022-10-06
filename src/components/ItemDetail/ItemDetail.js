import './itemDetail.css';

const ItemDetail = ({ product }) => {
	return (
		<div className="container">
			<div className="card m-4" key={product.id}>
				<div className="card-body">
					<h5 className="card-title">{product.name}</h5>
					<p className="card-text">{product.description}</p>
				</div>
				<img src={product.url} className="card-img-bottom" alt="card-img-bottom" />
			</div>
		</div>
	);
};

export default ItemDetail;
