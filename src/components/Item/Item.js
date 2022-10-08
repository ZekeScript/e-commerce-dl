import { Link } from 'react-router-dom';

const Item = ({ product }) => {
	return (
		<Link to={`/detail/${product.id}`} className="card m-4" key={product.id}>
			<div className="card-body">
				<h5 className="card-title">{product.name}</h5>
			</div>
			<img src={product.thumbnail} className="card-img-bottom" alt="card-img-bottom" />
		</Link>
	);
};

export default Item;
