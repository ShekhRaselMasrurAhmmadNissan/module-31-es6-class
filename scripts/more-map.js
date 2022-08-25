const numbers = [12, 56, 87, 44];
const half = numbers.map((x) => parseFloat((x / 2).toFixed(2)));
const dividedByThree = numbers.map((x) => parseFloat((x / 3).toFixed(2)));
// console.log(half);
// console.log(dividedByThree);

const friends = [`Tom Hanks`, `Tom Cruise`, `Tom Brady`, `Tom Solaiman`];
const firstLetters = friends.map((friend) => friend[0]);
// console.log(firstLetters);
const nameLengths = friends.map((friend) => friend.length);
// console.log(nameLengths);

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

const productsName = products.map((product) => product.name);
const prices = products.map((product) => product.price);
console.log(productsName);
console.log(prices);
