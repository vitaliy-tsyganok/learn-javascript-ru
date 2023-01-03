/* https://learn.javascript.ru/task/sum-many-brackets

Сумма с произвольным количеством скобок
важность: 2
Напишите функцию sum, которая бы работала следующим образом: */

console.log(sum(1)(2) == 3); // 3
console.log(sum(1)(2)(3) == 6); // 6
console.log(sum(5)(-1)(2) == 6); // 6
console.log(sum(6)(-1)(-2)(-3) == 0); // 0
console.log(sum(0)(1)(2)(3)(4)(5) == 15); // 15

// P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.

// Решение
function sum(a) {
	function callback(b) {
		callback.counter += b;
		return callback;
	}

	callback.counter = a;
	callback.toString = function () {
		return callback.counter;
	};

	return callback;
}
