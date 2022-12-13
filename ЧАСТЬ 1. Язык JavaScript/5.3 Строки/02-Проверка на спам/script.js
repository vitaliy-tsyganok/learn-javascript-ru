/* https://learn.javascript.ru/task/check-spam

Проверка на спам
важность: 5
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру: */

checkSpam('buy ViAgRA now') == true;
checkSpam('free xxxxx') == true;
checkSpam('innocent rabbit') == false;

// Решение
function checkSpam(str) {
	const stopWords = ['viagra', 'xxx'];
	const strLowerCase = str.toLowerCase();
	return stopWords.some((stopword) => strLowerCase.includes(stopword));
}
