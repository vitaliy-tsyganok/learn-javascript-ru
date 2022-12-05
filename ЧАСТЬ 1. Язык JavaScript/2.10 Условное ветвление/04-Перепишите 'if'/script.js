/* https://learn.javascript.ru/task/rewrite-if-question

Перепишите 'if' в '?'
важность: 5
Перепишите конструкцию if с использованием условного оператора '?': */

let result

if (a + b < 4) {
	result = 'Мало'
} else {
	result = 'Много'
}

result = a + b < 4 ? 'Мало' : 'Много'
