/* https://learn.javascript.ru/task/get-seconds-today

Сколько сегодня прошло секунд?
важность: 5
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

// Solution
function getSecondsToday() {
	const today = new Date(Date.now());
	today.setHours(0, 0, 0, 0);
	return ((Date.now() - today) / 1000).toFixed(0);
}
