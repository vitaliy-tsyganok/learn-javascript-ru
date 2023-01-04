/* https://learn.javascript.ru/task/debounce

Декоратор debounce
важность: 5
Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.

Например: */

let f = debounce(console.log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

/* На практике debounce полезен для функций, которые получают/обновляют данные, и мы знаем, что повторный вызов в течение короткого промежутка времени не даст ничего нового. Так что лучше не тратить на него ресурсы. */

// Решение
// function debounce(f, ms) {
// 	let delay = 0
// 	return function() {
// 		if (Date.now() - delay > ms) {
// 			delay = Date.now()
// 			return f.apply(this, arguments)
// 		}
// 	}
// }

function debounce(f, ms) {
	let isCooldown = false;
	return function () {
		if (isCooldown) {
			return;
		}
		f.apply(this, arguments);
		isCooldown = true;
		setTimeout(() => (isCooldown = false), ms);
	};
}
