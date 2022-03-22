const numbers = [ 1, 2, 3, 4, 5, 6 ];

const numbersV2 = numbers.map(function(el) {
	return el * 2;
});

const numbersV3 = numbers.map((el) => el * 2); // Mesma função acima, Arrow

console.log(numbers, numbersV2, numbersV3);

const students = [
	{ name: 'Jake', score: 6.4 },
	{ name: 'Susan', score: 8.6 },
	{ name: 'Emma', score: 9.4 },
	{ name: 'Peter', score: 9.1 }
];

const getScore = (el) => el.score;

const result = students.map(getScore).map(Math.ceil); // Arredondar pra cima

console.log(students, result);
