/* https://learn.javascript.ru/task/hamster-proto

Почему наедаются оба хомяка?
важность: 5
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить? */

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach.push(food);
	},
};

let speedy = {
	stomach: [], // *
	__proto__: hamster,
};

let lazy = {
	stomach: [], // *
	__proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat('apple');
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

// Решение
// У хомяка lazy также была еда из-за того, что оба хомяка не имели собственного свойства stomach, а наследовали его из прототипа hamster. Необходимо было добавить каждому хомяку собственное свойство stomach: []
