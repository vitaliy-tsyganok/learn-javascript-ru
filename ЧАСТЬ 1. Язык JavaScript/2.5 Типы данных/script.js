/* 
https://learn.javascript.ru/task/string-quotes

Шаблонные строки
важность: 5
Что выведет этот скрипт?
 */

let name = "Ilya";

console.log( `hello ${1}` ); // hello 1

console.log( `hello ${"name"}` ); // hello name

console.log( `hello ${name}` ); // hello Ilya