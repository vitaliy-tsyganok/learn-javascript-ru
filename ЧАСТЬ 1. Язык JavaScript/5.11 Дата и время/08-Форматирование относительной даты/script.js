/* https://learn.javascript.ru/task/format-date-relative

Форматирование относительной даты
важность: 4
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например: */

alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));

// Solution
function formatDate(date) {
	const diffSec = Math.round((Date.now() - date.getTime()) / 1000);

	if (diffSec < 1) {
		return 'прямо сейчас';
	}
	if (diffSec < 60) {
		return `${diffSec} сек. назад`;
	}
	if (diffSec < 3600) {
		return `${Math.floor(diffSec / 60)} мин. назад`;
	}
	const format = {
		day: `${date.getDate()}`.padStart(2, '0'),
		month: `${date.getMonth() + 1}`.padStart(2, '0'),
		year: `${date.getFullYear()}`.slice(-2),
		hours: `${date.getHours()}`.padStart(2, '0'),
		minutes: `${date.getMinutes()}`.padStart(2, '0'),
	};
	return `${format.day}.${format.month}.${format.year}, ${format.hours}:${format.minutes}`;
}
