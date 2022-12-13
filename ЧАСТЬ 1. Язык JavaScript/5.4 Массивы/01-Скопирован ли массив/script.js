/* https://learn.javascript.ru/task/item-value

Скопирован ли массив?
важность: 3
Что выведет следующий код? */

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?

// Ответ: 4. shoppingCart и fruits содержат ссылки на один и тот же массив