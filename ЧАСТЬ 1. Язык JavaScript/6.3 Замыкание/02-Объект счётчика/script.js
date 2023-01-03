/* https://learn.javascript.ru/task/counter-object-independent

Объект счётчика
важность: 5
Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет? */

function Counter() {
	let count = 0;

	this.up = function () {
		return ++count;
	};
	this.down = function () {
		return --count;
	};
}

let counter = new Counter();

// Ответ. Да, счетчик будет работать, потому что методы up и down создаются внутри экземпляра counter, т.к. this будет ссылаться на экземпляр. Сами же методы up и down получают доступ к лексическому окружению экземпляра, которое независимо. Можно также с успехом создать еще другие счетчики (counter1, counter2 и т.д), и каждый будет независим друг от друга.
// let counter1 = new Counter();
// let counter2 = new Counter();

console.log(counter.up()); // ? 1
console.log(counter.up()); // ? 2
console.log(counter.down()); // ? 1
