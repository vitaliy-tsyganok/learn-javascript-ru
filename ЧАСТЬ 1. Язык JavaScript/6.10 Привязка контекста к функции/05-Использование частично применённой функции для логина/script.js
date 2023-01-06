/* https://learn.javascript.ru/task/ask-partial

Использование частично применённой функции для логина
важность: 5
Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".

Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail? */

function askPassword(ok, fail) {
	let password = prompt('Password?', '');
	if (password == 'rockstar') ok();
	else fail();
}

let user = {
	name: 'John',

	login(result) {
		console.log(this.name + (result ? ' logged in' : ' failed to log in'));
	},
};

// Решение через стрелочную функцию
askPassword(
	() => user.login(true),
	() => user.login(false)
);

// Решение через создание частично применённой функции с помощью bind
askPassword(user.login.bind(user, true), user.login.bind(user, false));
