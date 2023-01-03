/* https://learn.javascript.ru/task/function-in-if

Функция в if
Посмотрите на код. Какой будет результат у вызова на последней строке? */

let phrase = 'Hello';

if (true) {
	let user = 'John';

	function sayHi() {
		console.log(`${phrase}, ${user}`);
	}
}

sayHi();

// Ответ. В строгом режиме ошибка ReferenceError, в нестрогом режиме строка 'Hello, John'
