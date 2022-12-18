/* https://learn.javascript.ru/task/max-salary

Максимальная зарплата
важность: 5
У нас есть объект salaries с зарплатами: */

let salaries = {
	'John': 100,
	'Pete': 300,
	'Mary': 250,
};
/* Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */

// Решение
function topSalary(salaries) {
	let [topName, topSalary] = [null, 0];

	for (let [name, salary] of Object.entries(salaries)) {
		if (salary > topSalary) {
			[topName, topSalary] = [name, salary];
		}
	}

	return topName;
}

console.log(topSalary(salaries));
