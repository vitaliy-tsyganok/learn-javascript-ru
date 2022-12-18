/* https://learn.javascript.ru/task/count-properties

Подсчёт количества свойств объекта
важность: 5
Напишите функцию count(obj), которая возвращает количество свойств объекта: */

let user = {
	name: 'John',
	age: 30,
};

console.log(count(user)); // 2
/* Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные». */

// Решение
function count(obj) {
	return Object.keys(obj).length;
}
