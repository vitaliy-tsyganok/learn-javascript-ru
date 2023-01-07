/* https://learn.javascript.ru/task/defer-to-prototype-extended

Добавьте функциям декорирующий метод "defer()"
важность: 4
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так: */

function f(a, b) {
	console.log(a + b);
}

// Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

// Мое решение
Function.prototype.defer = function (ms) {
	return (...args) => setTimeout(() => this(...args), ms);
};

// Решение из учебника
// Function.prototype.defer = function (ms) {
// 	const f = this;
// 	return function (...args) {
// 		setTimeout(() => f.apply(this, args), ms);
// 	};
// };

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
