/* https://learn.javascript.ru/task/two-functions-one-object

Две функции - один объект
важность: 2
Возможно ли создать функции A и B, чтобы new A() == new B()? */

const myObj = {}

function A() { return myObj }
function B() { return myObj }

let a = new A();
let b = new B();

console.log( a == b ); // true
// Если да – приведите пример вашего кода.

// Ответ
// Да, возможно. Если функция возвращяет объект, то оператор new вернет этот объект, а не this. Поэтому они могут возвращать один и тот же внешне определенный объект

