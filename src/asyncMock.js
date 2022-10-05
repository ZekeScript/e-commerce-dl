const products = [
	{
		id: '1',
		name: 'Film',
		price: 10,
		category: 'descartables',
		img: '',
		stock: 5,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '2',
		name: 'Guantes',
		price: 10,
		category: 'descartables',
		img: '',
		stock: 20,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '3',
		name: 'Palillos de madera',
		price: 60,
		category: 'descartables',
		img: '',
		stock: 25,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '4',
		name: 'Latonas',
		price: 10,
		category: 'limpieza',
		img: '',
		stock: 5,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '5',
		name: 'Trapo de piso',
		price: 10,
		category: 'limpieza',
		img: '',
		stock: 5,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '6',
		name: 'Cubiertos plasticos',
		price: 10,
		category: 'descartables',
		img: '',
		stock: 30,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '7',
		name: 'platos plasticos',
		price: 10,
		category: 'descartables',
		img: '',
		stock: 30,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '8',
		name: 'Hilo',
		price: 10,
		category: 'bazar',
		img: '',
		stock: 30,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '9',
		name: 'Franela',
		price: 10,
		category: 'limpieza',
		img: '',
		stock: 10,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '10',
		name: 'Paño',
		price: 10,
		category: 'limpieza',
		img: '',
		stock: 10,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '11',
		name: 'Esponja',
		price: 10,
		category: 'limpieza',
		img: '',
		stock: 40,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '12',
		name: 'Bobina de papel',
		price: 10,
		category: 'descartable',
		img: '',
		stock: 5,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '13',
		name: 'Bandeja de carton',
		price: 10,
		category: 'descartable',
		img: '',
		stock: 30,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
	{
		id: '14',
		name: 'Caja de pizza',
		price: 10,
		category: 'descartable',
		img: '',
		stock: 30,
		description:
			'at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae',
	},
];

export const getProducts = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(products);
		}, 2000);
	});
};
