const ItemList = ({ products }) => {
	return (
		<div className="container d-flex flex-wrap">
			{products.map((products) => (
				<div className="card m-4" key={products.id}>
					<div className="card-body">
						<h5 className="card-title">{products.name}</h5>
					</div>
					<img src={products.thumbnail} className="card-img-bottom" alt="card-img-bottom" />
				</div>
			))}
		</div>
	);
};

export default ItemList;
