const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
	let number = numbers[i];

	if (number > 0) {
		positiveCount++;
	} else if (number == 0) {
		zeroCount++;
	} else if (number < 0) {
		negativeCount++;
	}
}

console.log('\n');
console.log('Кількість позитивних чисел test:' + ' ' + positiveCount);
console.log('Кількість нульових чисел тест:' + ' ' + zeroCount);
console.log('Кількість негативних чисел тест:' + ' ' + negativeCount);