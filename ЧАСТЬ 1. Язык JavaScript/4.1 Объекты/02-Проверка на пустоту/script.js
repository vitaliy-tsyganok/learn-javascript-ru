/* https://learn.javascript.ru/task/is-empty

Проверка на пустоту
важность: 5
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так: */

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule)); // false

// Решение
function isEmpty(obj) {
	for (let prop in obj) {
		return false;
	}
	return true;
}
