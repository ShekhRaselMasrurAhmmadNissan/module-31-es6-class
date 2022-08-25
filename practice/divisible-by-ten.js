const numbers = [33, 50, 79, 78, 90, 101, 30];
const filterResult = numbers.filter((number) => number % 10 === 0);
const findResult = numbers.find((number) => number % 10 === 0);
console.log(filterResult);
console.log(findResult);
