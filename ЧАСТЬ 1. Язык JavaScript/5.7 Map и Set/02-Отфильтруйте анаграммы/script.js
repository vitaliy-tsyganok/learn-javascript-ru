/* https://learn.javascript.ru/task/filter-anagrams

Отфильтруйте анаграммы
важность: 4
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например: */

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

// Мое решение (не оптимальное)
function aclean(arr) {
	const result = [];
	for (let word of arr) {
		if (result.every((wordResult) => !isAnagrame(word, wordResult))) {
			result.push(word);
		}
	}
	return result;
}

function isAnagrame(a, b) {
	if (a.length !== b.length) {
		return false;
	}
	const set = new Set(a.toLowerCase().split(''));
	return b
		.toLowerCase()
		.split('')
		.every((char) => set.has(char));
}

// Решение из учебника
function aclean(arr) {
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		let sorted = arr[i].toLowerCase().split('').sort().join('');
		obj[sorted] = arr[i];
	}

	return Object.values(obj);
}
