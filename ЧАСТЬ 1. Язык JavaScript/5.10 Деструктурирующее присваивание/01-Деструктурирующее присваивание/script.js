/* https://learn.javascript.ru/task/destruct-user

Деструктурирующее присваивание
важность: 5
У нас есть объект: */

let user = {
	name: 'John',
	years: 30,
};
/* Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
Пример переменных после вашего присваивания: */

// let user = { name: 'John', years: 30 };

// ваш код должен быть с левой стороны:
const { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
