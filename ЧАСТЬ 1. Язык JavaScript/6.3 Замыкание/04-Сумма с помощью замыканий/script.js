/* https://learn.javascript.ru/task/closure-sum

Сумма с помощью замыканий
важность: 4
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Да, именно таким образом, используя двойные круглые скобки (не опечатка).

Например: */

console.log(sum(1)(2)) // 3
console.log(sum(5)(-1)) // 4

// Решение
function sum(a) {
	return (b) => a + b
}