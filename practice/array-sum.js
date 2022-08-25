const numbers = [1, 9, 17, 22];
/**
 * Finding sum using for loop
 */

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	sum += element;
}
console.log(sum);

/**
 * Finding sum using reduce method
 */
let result = numbers.reduce((previous, current) => {
	return previous + current;
}, 0);
console.log(result);
