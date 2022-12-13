/* https://learn.javascript.ru/task/sum-interface

Сумма пользовательских чисел
важность: 5
Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

P.S. Есть «подводный камень» при работе с типами. */

// Решение
// Решил с таким условием, что пользователь вводит числа в одну строку через пробел
const inputString = prompt('Введите числа через пробел', '');

alert(calcSumInString(inputString));

function calcSumInString(inputString) {
	return inputString
		.split(/\s+/gi)
		.reduce((sum, el) => (!isNaN(el) ? sum + Number(el) : sum), 0);
}
