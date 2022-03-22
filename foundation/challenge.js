// Create a range function
// function range(n1, n2 = 0, p = 1) {
// 	const nums = []
// 	if (n1 <= n2) {
// 		for (var i = n1; i <= n2; i += p) {
// 			nums.push(i)
// 		}
// 	} else if(n1 > n2) {
// 		for (var i = n1; i >= n2; i -= p) {
// 			nums.push(i)
// 		}
// 	}

// 	return nums
// }

function range(a, b, s = 1) {
	const n1 = b === undefined ? 1 : a;
	const n2 = b === undefined ? a : b;
	const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s);

	const nums = [];
	for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
		nums.push(i);
	}
	return nums;
}

// let contar = range(10,2, 1);
console.log(range(10, 2, 1));
console.log(range(2, 25, 2));
