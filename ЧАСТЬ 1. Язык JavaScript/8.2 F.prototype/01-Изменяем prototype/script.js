/* https://learn.javascript.ru/task/changing-prototype

Изменяем "prototype"
важность: 5
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код: */

function Rabbit() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit1 = new Rabbit();

console.log(rabbit1.eats); // true
// Добавим одну строчку (выделенную в коде ниже). Что вызов console.log() покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit2 = new Rabbit();

Rabbit.prototype = {};

console.log(rabbit2.eats); // ? Ответ. true. Смена значения Rabbit.prototype влияет только на новые экземпляры. Старые экземпляры останутся без изменений.

// …А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit3 = new Rabbit();

Rabbit.prototype.eats = false;

console.log(rabbit3.eats); // ? Ответ. false, т.к. Rabbit.prototype.eats меняет значение свойства eats у исходного прототипа
// Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit4 = new Rabbit();

delete rabbit4.eats;

console.log(rabbit4.eats); // ? Ответ. true, т.к. команда delete rabbit.eats в данном случае ничего не делает, т.к. свойство eats изначально отсутствует в экземпляре rabbit
// Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
	eats: true,
};

let rabbit5 = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit5.eats); // ? Ответ. undefined, т.к. команда delete Rabbit.prototype.eats удаляет свойство eats у исходного прототипа
