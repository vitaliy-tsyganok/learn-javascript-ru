/* https://learn.javascript.ru/task/counter-inc-dec

Установка и уменьшение значения счётчика
важность: 5
Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так. */

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)


// Решение
function makeCounter() {
	// let count = 0;

	function counter() {
		return counter.count++;
	}
	counter.count = 0
	counter.set = (num) => counter.count = num
	counter.decrease = () => counter.count -= 1

	return counter
}
