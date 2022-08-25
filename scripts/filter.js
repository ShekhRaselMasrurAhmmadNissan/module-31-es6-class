const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

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

const moreThanTwenty = numbers.filter((number) => number > 20);
const lessThanTwenty = numbers.filter((number) => number < 20);
const even = numbers.filter((number) => !(number % 2));
const expensive = products.filter((product) => product.price < 100);
// console.log(moreThanTwenty);
// console.log(lessThanTwenty);
// console.log(even);
console.log(expensive);
