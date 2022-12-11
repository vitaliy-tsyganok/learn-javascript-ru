/* https://learn.javascript.ru/task/sum-object

Сумма свойств объекта
важность: 5
У нас есть объект, в котором хранятся зарплаты нашей команды: */

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};
/* Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0. */

// Решение
function getSum(obj = {}) {
	return Object.values(obj).reduce((sum, salary) => sum + salary, 0);
}

const sum = getSum(salaries)
console.log(sum) // 390