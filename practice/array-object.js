const peoples = [
	{
		name: `Meena`,
		age: 20,
	},
	{
		name: `Rina`,
		age: 15,
	},
	{
		name: `Suchorita`,
		age: 22,
	},
];

/**
 * Sum of age using for loop
 */
let sum = 0;
for (let i = 0; i < peoples.length; i++) {
	const { age } = peoples[i];
	sum += age;
}

console.log(sum);

/**
 * Finding sum of age using reduce method
 */
const result = peoples.reduce((previous, current) => previous + current.age, 0);
console.log(result);
