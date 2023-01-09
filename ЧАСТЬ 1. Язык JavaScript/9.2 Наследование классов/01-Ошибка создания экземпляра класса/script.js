/* https://learn.javascript.ru/task/class-constructor-error

Ошибка создания экземпляра класса
важность: 5
В коде ниже класс Rabbit наследует Animal.

К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку. */

class Animal {
	constructor(name) {
		this.name = name;
	}
}

class Rabbit extends Animal {
	constructor(name) {
		super(name); // * Ответ. Конструктор дочернего класса должен сначала вызывать метод super(), чтобы правильно передавался контекст this
		// this.name = name; // Это свойство можно не дублировать, тк. в super в качестве аргумента можно передать name. Принцип DRY
		this.created = Date.now();
	}
}

let rabbit = new Rabbit('Белый кролик'); // Error: this is not defined
console.log(rabbit.name);
