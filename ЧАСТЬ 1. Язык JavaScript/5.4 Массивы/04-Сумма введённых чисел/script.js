/* https://learn.javascript.ru/task/array-input-sum

Сумма введённых чисел
важность: 4
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0». */

// Решение
function sumInput() {
	const arr = [];
	while (true) {
		const userValue = prompt('Введите число', '');
		if (!isFinite(userValue) || !userValue) {
			break;
		}
		arr.push(+userValue);
	}
	return arr.reduce((sum, num) => sum + num, 0);
}

alert(sumInput());
