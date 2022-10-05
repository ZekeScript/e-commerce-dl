const ItemList = ({ products }) => {
	return (
		<ul>
			{products.map((products) => (
				<li key={products.id}>{products.name}</li>
			))}
		</ul>
	);
};

export default ItemList;
