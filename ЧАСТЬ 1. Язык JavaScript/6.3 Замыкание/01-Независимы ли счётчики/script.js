/* https://learn.javascript.ru/task/counter-independent

Независимы ли счётчики?
важность: 5
Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё? */

function makeCounter() {
	let count = 0;

	return function () {
		return count++;
	};
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

// Ответ. Да, оба счетчика полностью независимы, потому что для каждого вызова функции makeCounter() создается отдельное лексическое окружение

console.log(counter2()); // ? - 0
console.log(counter2()); // ? - 1
