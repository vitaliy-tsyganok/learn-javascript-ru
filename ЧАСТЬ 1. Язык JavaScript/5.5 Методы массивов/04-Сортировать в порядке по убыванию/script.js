/* https://learn.javascript.ru/task/sort-back

Сортировать в порядке по убыванию
важность: 4 */
let arr = [5, 2, 1, -10, 8];

// Решение
arr.sort((a, b) => b - a)

console.log( arr ); // 8, 5, 2, 1, -10