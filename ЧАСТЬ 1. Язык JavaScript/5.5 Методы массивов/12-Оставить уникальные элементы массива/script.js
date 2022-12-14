/* https://learn.javascript.ru/task/array-unique

Оставить уникальные элементы массива
важность: 4
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например: */

// Решение
function unique(arr) {
	return arr.reduce(
		(acc, item) => (acc.includes(item) ? acc : acc.concat(item)),
		[]
	);
}

let strings = [
	'кришна',
	'кришна',
	'харе',
	'харе',
	'харе',
	'харе',
	'кришна',
	'кришна',
	':-O',
];

console.log(unique(strings)); // кришна, харе, :-O
