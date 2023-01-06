/* https://learn.javascript.ru/task/function-property-after-bind

Свойство функции после bind
важность: 5
В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ. */

function sayHi() {
	console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
	name: 'Вася',
});

console.log(bound.test); // что выведет? почему?

// Ответ. undefined, потому что bind привязал совершенно другой объект, у которого нет свойства test
