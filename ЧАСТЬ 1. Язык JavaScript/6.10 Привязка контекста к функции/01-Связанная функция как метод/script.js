/* https://learn.javascript.ru/task/write-to-object-after-bind

Связанная функция как метод
важность: 5
Что выведет функция? */

function f() {
	console.log(this); // ?
}

let user = {
	g: f.bind(null),
};

user.g();

// Ответ. null, т.к. на 12 строке с помощью bind происходит жесткая привязка контекста this=null
