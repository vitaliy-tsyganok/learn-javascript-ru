/* https://learn.javascript.ru/task/output-single-linked-list-reverse

Вывод односвязного списка в обратном порядке
важность: 5
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию. */

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

// Решение через рекурсию
function printReverseList(list) {
	if (list.next) {
		printReverseList(list.next);
	}
	console.log(list.value);
}

// Решение через цикл
function printReverseList(list) {
	let arr = [];
	let tmp = list;

	while (tmp) {
		arr.push(tmp.value);
		tmp = tmp.next;
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverseList(list);
