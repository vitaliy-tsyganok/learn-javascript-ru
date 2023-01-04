/* https://learn.javascript.ru/task/output-numbers-100ms

Вывод каждую секунду
важность: 5
Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout. */

// Решение через setInterval
// function printNumbers(from, to) {
// 	const timerId = setInterval(function() {
// 		console.log(from)
// 		if (from >= to) {
// 			clearInterval(timerId)
// 		}
// 		from += 1
// 	}, 1000)
// }

// Решение с помощью рекурсивного вызова setTimeout
function printNumbers(from, to) {
	setTimeout(function tick() {
		console.log(from)
		if (from < to) {
			setTimeout(tick, 1000)
		}
		from += 1
	}, 0)
}

printNumbers(50, 55)