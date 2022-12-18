/* https://learn.javascript.ru/task/sum-salaries

Сумма свойств объекта
важность: 5
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например: */

let salaries = {
	'John': 100,
	'Pete': 300,
	'Mary': 250,
};

console.log(sumSalaries(salaries)); // 650

// Решение
function sumSalaries(salaries) {
	let sum = 0;
	for (let salary of Object.values(salaries)) {
		sum += salary;
	}
	return sum;
}

// Альтернативное решение
function sumSalaries(salaries) {
	return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}
