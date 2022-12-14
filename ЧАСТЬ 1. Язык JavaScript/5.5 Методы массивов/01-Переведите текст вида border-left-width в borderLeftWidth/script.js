/* https://learn.javascript.ru/task/camelcase

Переведите текст вида border-left-width в borderLeftWidth
важность: 5
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

Примеры: */

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// Решение
// function camelize(str) {
// 	return str
// 		.split('')
// 		.reduce((acc, item, index, array) => {
// 			if (item === '-') {
// 				return acc;
// 			}
// 			if (array[index - 1] !== '-') {
// 				acc.push(item);
// 				return acc;
// 			}
// 			acc.push(item.toUpperCase());
// 			return acc;
// 		}, [])
// 		.join('');
// }

// function camelize(str) {
// 	return str
// 		.split('-')
// 		.reduce((acc, word, index) => {
// 			if (index === 0) {
// 				acc.push(word);
// 				return acc;
// 			}
// 			acc.push(word[0].toUpperCase() + word.slice(1));
// 			return acc;
// 		}, [])
// 		.join('');
// }

// function camelize(str) {
// 	return str
// 		.split('-')
// 		.reduce(
// 			(acc, word, index) =>
// 				index === 0
// 					? acc.concat(word)
// 					: acc.concat(word[0].toUpperCase() + word.slice(1)),
// 			[]
// 		)
// 		.join('');
// }

function camelize(str) {
	return str
		.split('-')
		.map((word, index) =>
			index === 0 ? word : word[0].toUpperCase() + word.slice(1)
		)
		.join('');
}
