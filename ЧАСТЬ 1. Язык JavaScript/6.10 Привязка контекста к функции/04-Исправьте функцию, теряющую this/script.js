/* https://learn.javascript.ru/task/question-use-bind

Исправьте функцию, теряющую "this"
важность: 5
Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

Однако, его вызов приводит к ошибке. Почему?

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо). */

function askPassword(ok, fail) {
	let password = prompt('Password?', '');
	if (password == 'rockstar') ok();
	else fail();
}

let user = {
	name: 'Вася',

	loginOk() {
		console.log(`${this.name} logged in`);
	},

	loginFail() {
		console.log(`${this.name} failed to log in`);
	},
};

// Решение
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
