/* https://learn.javascript.ru/task/repeat-until-number

Ввод числового значения
важность: 5
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */

function readNumber() {
	let inputValue;
	do {
		inputValue = prompt('Введите число', '');
		if (!inputValue) {
			return null;
		}
	} while (!isFinite(inputValue));
	return +inputValue;
}

alert(readNumber());
