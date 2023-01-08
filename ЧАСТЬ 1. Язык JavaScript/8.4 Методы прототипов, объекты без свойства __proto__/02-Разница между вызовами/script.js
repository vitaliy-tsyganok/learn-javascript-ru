/* https://learn.javascript.ru/task/compare-calls

Разница между вызовами
важность: 5
Давайте создадим новый объект rabbit: */

function Rabbit(name) {
	this.name = name;
}
Rabbit.prototype.sayHi = function () {
	console.log(this.name);
};

let rabbit = new Rabbit('Rabbit');

// Все эти вызовы делают одно и тоже или нет?
// Ответы
rabbit.sayHi(); // Rabbit. Метод будет взят из прототипа Rabbit.prototype.sayHi, но this будет ссылаться на rabbit
Rabbit.prototype.sayHi(); // undefined, т.к. this=Rabbit.prototype, и соответственно Rabbit.prototype.name === undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined, то же самое что и Rabbit.prototype.sayHi()
rabbit.__proto__.sayHi(); // undefined, то же самое что Rabbit.prototype.sayHi() и Object.getPrototypeOf(rabbit).sayHi()
