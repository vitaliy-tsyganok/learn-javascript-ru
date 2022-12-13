/* https://learn.javascript.ru/task/random-int-min-max

Случайное целое число от min до max
важность: 2
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции: */

// console.log( randomInteger(1, 3) ); // 1
// console.log( randomInteger(1, 3) ); // 3
// console.log( randomInteger(1, 3) ); // 5

// Решение
function randomInteger(min, max) {
	return Math.floor(min + Math.random() * (max + 1 - min));
}

// Проверка вероятности
const dataTest = new Map();

dataTest.set(1, 0);
dataTest.set(2, 0);
dataTest.set(3, 0);

for (let i = 0; i < 1e7; i++) {
	const num = randomInteger(1, 3);
	dataTest.set(num, dataTest.get(num) + 1);
}

console.log(dataTest);
