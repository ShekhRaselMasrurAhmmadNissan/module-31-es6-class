const products = [
	{
		id: 1,
		name: `Laptop`,
		price: 45000,
	},
	{
		id: 2,
		name: `Mobile`,
		price: 80000,
	},
	{
		id: 3,
		name: `Watch`,
		price: 5000,
	},
	{
		id: 4,
		name: `Tablet`,
		price: 23000,
	},
];

const result = products.find((product) => product.price === 5000);
console.log(result);
