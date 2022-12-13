/* https://learn.javascript.ru/task/ucfirst

Сделать первый символ заглавным
важность: 5
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например: */

ucFirst('вася') == 'Вася';

// Решение
function ucFirst(inputString) {
	return typeof inputString === 'string' && inputString.length > 0
		? inputString[0].toUpperCase() + inputString.slice(1)
		: inputString;
}

console.log(ucFirst('вася'));
