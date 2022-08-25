/**
 * Functions Start
 */
const doubleIt = (number) => number * 2;
const getDoubles = (numbers) => {
	const output = [];

	for (const number of numbers) {
		const doubled = doubleIt(number);
		output.push(doubled);
	}
	return output;
};

/**
 * Functions End
 */
const numbers = [2, 8, 4, 6, 3, 9, 7];
const makeDouble = numbers.map(doubleIt);
const result = getDoubles(numbers);
const makeDoubleDirect = numbers.map((x) => x * 2);
const fiveTimes = [1, 2, 3, 4, 5, 6].map((x) => x * 5);
// console.log(result);
console.log(makeDouble);
console.log(makeDoubleDirect);
console.log(fiveTimes);
