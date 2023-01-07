/* https://learn.javascript.ru/task/proto-and-this

Куда будет произведена запись?
важность: 5
Объект rabbit наследует от объекта animal.

Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit? */

let animal = {
	eat() {
		this.full = true;
	},
};

let rabbit = {
	__proto__: animal,
};

rabbit.eat();

// Ответ. rabbit, потому что this определяется в момент вызова и в данном случае является объектом перед точкой, то есть this=rabbit
console.log(rabbit.full); // true
console.log(animal.full); // undefined
