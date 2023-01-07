/* https://learn.javascript.ru/task/property-after-delete

Работа с прототипами
важность: 5
В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода? */

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // ? (1)

delete rabbit.jumps;

console.log( rabbit.jumps ); // ? (2)

delete animal.jumps;

console.log( rabbit.jumps ); // ? (3)

// Должно быть 3 ответа.

// Ответы
// (1) true
// (2) null. Значение берется из animal.jumps
// (3) undefined