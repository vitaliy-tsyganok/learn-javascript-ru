/* https://learn.javascript.ru/task/filter-range-in-place

Фильтрация по диапазону "на месте"
важность: 4
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например: */

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]

// Решение
function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		if (num < a || num > b) {
			arr.splice(i, 1);
			i -= 1;
		}
	}
}
