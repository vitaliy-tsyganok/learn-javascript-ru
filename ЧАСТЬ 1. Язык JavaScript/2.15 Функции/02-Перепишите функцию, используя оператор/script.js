/* https://learn.javascript.ru/task/rewrite-function-question-or

Перепишите функцию, используя оператор '?' или '||'
важность: 4
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат. */

function checkAge(age) {
	if (age > 18) {
		return true
	} else {
		return confirm('Родители разрешили?')
	}
}
/* Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор || */

// Решение

// Вариант 1. С оператором "?"
function checkAge(age) {
	return age > 18 ? true : confirm('Родители разрешили?')
}

// Вариант 2. С оператором "||"
function checkAge(age) {
	return age > 18 || confirm('Родители разрешили?')
}
