/* https://learn.javascript.ru/task/sort-objects

Отсортировать пользователей по возрасту
важность: 5
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

Например: */

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

// теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя

// Решение
function sortByAge(users) {
	users.sort((a, b) => a.age - b.age)
}
