const products = [
	{
		id: '1',
		name: 'Film',
		price: 4000,
		category: 'descartables',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/film.png',
		stock: 5,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/film.png',
	},
	{
		id: '2',
		name: 'Guantes',
		price: 1200,
		category: 'descartables',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/guantes.png',
		stock: 5,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/guantes.png',
	},
	{
		id: '3',
		name: 'Escarbadiente',
		price: 1600,
		category: 'descartables',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/palillos%20madera.png',
		stock: 5,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/palillos%20madera.png',
	},
	{
		id: '4',
		name: 'Latonas',
		price: 1100,
		category: 'bazar',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/fuentones.png',
		stock: 5,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/fuentones.png',
	},
	{
		id: '5',
		name: 'Trapo de piso',
		price: 120,
		category: 'limpieza',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/trapo%20piso.png',
		stock: 100,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/trapo%20piso.png',
	},
	{
		id: '6',
		name: 'Cubiertos plasticos',
		price: 420,
		category: 'descartables',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/cubiertos%20plasticos.png',
		stock: 1000,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/cubiertos%20plasticos.png',
	},
	{
		id: '7',
		name: 'Platos plasticos',
		price: 510,
		category: 'descartables',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/plato%20plastico.png',
		stock: 5,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/plato%20plastico.png',
	},
	{
		id: '8',
		name: 'Hilo',
		price: 700,
		category: 'descartable',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/hilo.png',
		stock: 10,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/hilo.png',
	},
	{
		id: '9',
		name: 'Franela',
		price: 300,
		category: 'limpieza',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/franela.png',
		stock: 50,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/franela.png',
	},
	{
		id: '10',
		name: 'Paño',
		price: 90,
		category: 'limpieza',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/pa%C3%B1o.png',
		stock: 100,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/pa%C3%B1o.png',
	},
	{
		id: '11',
		name: 'Esponja',
		price: 60,
		category: 'limpieza',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/esponja.png',
		stock: 120,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/esponja.png',
	},
	{
		id: '12',
		name: 'Bobina de papel',
		price: 400,
		category: 'descartable',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/papel%20bobina-resma.png',
		stock: 15,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/papel%20bobina-resma.png',
	},
	{
		id: '13',
		name: 'Bandeja de carton',
		price: 1000,
		category: 'descartable',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/bandeja%20carton.png',
		stock: 15,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/bandeja%20carton.png',
	},
	{
		id: '14',
		name: 'Caja de pizza',
		price: 3700,
		category: 'descartable',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/cajas%20pizza-empanada.png',
		stock: 200,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/cajas%20pizza-empanada.png',
	},
	{
		id: '15',
		name: 'Escobita',
		price: 300,
		category: 'limpieza',
		thumbnail:
			'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/thumbnail/escobita.png',
		stock: 50,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
		img: 'https://raw.githubusercontent.com/ezEst6/furry-carnival/products/src/assets/img/escobita.png',
	},
];

export const getProducts = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products);
		}, 2000);
	});
};

export const getProduct = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.find((prod) => prod.id === id));
		}, 2000);
	});
};

export const getProductsByCategory = (categoryId) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products.filter((prod) => prod.category === categoryId));
		}, 2000);
	});
};
