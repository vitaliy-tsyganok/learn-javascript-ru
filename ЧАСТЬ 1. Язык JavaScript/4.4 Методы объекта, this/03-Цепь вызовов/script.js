/* https://learn.javascript.ru/task/chain-calls

Цепь вызовов
важность: 2
У нас есть объект ladder (лестница), который позволяет подниматься и спускаться: */

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function () {
		// показывает текущую ступеньку
		console.log(this.step);
		return this;
	},
};
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Такой подход широко используется в библиотеках JavaScript.

// Решение
// Для того, чтобы методы можно было вызвывать по цепочке необходимо, чтобы каждый метод возвращал исходный объект. Этого можно добиться, добавив в каждый метод return this
