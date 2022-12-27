/* https://learn.javascript.ru/task/get-seconds-to-tomorrow

Сколько секунд осталось до завтра?
важность: 5
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. */

// Solution
function getSecondsToTomorrow() {
	const date = new Date();
	return (
		86400 - date.getHours() * 3600 - date.getMinutes() * 60 - date.getSeconds()
	);
}
