/* https://learn.javascript.ru/task/second-bind

Повторный bind
важность: 5
Можем ли мы изменить this дополнительным связыванием?

Что выведет этот код? */

function f() {
	console.log(this.name);
}

f = f.bind({ name: 'Вася' }).bind({ name: 'Петя' });

f();

// Ответ. Вася. Нельзя перепривязать контекст, который был создан с помощью bind
