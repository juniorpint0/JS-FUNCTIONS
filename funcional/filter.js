const numbers = [ 1, 2, 3, 4, 5, 6 ];

const greaterThanZero = (el) => el > 0;
const greaterThanTen = (el) => el > 10;
const ever = (el) => el % 2 === 0;

console.log(numbers.filter((el) => el > 0));
console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(greaterThanTen));
console.log(numbers.filter(ever));

const students = [
	{ name: 'Jake', score: 6.4 },
	{ name: 'Susan', score: 8.6 },
	{ name: 'Emma', score: 9.4 },
	{ name: 'Peter', score: 9.1 }
];

const greatStudent = (students) => students.score >= 9;

console.log(students.filter(greatStudent));
console.log('🚀 ~ file: filter.js ~ line 15 ~ students', students);
