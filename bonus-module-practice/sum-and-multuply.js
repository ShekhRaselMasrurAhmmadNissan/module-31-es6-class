const sumAndMultiply = (first, second) => {
	const newFirst = first + 2;
	const newSecond = second + 2;
	const result = newFirst * newSecond;
	return result;
};

const firstNumber = 45;
const secondNumber = 20;
const result = sumAndMultiply(firstNumber, secondNumber);
console.log(result);
