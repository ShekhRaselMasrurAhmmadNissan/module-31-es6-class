const friends = [`Tom Hanks`, `Tom Cruise`, `Tom Brady`, `Tom Solaiman`];

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
		price: 35000,
	},
	{
		id: 4,
		name: `Tablet`,
		price: 23000,
	},
];

friends.forEach((friend) => {
	console.log(friend);
});
let sum = 0;
products.forEach((product) => {
	sum += product.price;
});
console.log(sum);
