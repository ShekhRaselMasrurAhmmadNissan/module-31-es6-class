const numbers = [1, 3, 5, 7, 9];
const evenNumbers = numbers.map((x) => x + 1);
console.log(evenNumbers);

/**
 * Similar problem but with random Array
 */
const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const randomEvenArray = randomNumbers.map((number) => {
	if (number % 2 === 1) {
		return ++number;
	} else {
		return number;
	}
});
console.log(randomEvenArray);
