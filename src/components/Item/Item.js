import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';

const Item = ({ id, name, thumbnail, price }) => {
	const value = useContext(Context);
	console.log(value);

	return (
		<Link
			to={`/detail/${id}`}
			className="card m-4 text-decoration-none text-center"
			key={id}
		>
			<img src={thumbnail} className="card-img-top" alt="card-img-bottom" />
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text fs-5">{price}</p>
			</div>
		</Link>
	);
};

export default Item;
