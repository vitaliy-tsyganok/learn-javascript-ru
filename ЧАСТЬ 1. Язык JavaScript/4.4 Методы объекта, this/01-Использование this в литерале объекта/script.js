/* https://learn.javascript.ru/task/object-property-this

Использование "this" в литерале объекта
важность: 5
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему? */

function makeUser() {
	return {
		name: 'John',
		ref: this,
	};
}

let user = makeUser();

console.log(user.ref.name); // Каким будет результат?

// Ответ
// В строгом режиме будет ошибка, т.к. this вернет undefined
// В обычном режиме будет undefined, т.к. this вернет объект Window

// Переписанная функция
function makeUser2() {
	return {
		name: 'John',
		ref() {
			return this;
		},
	};
}

let user2 = makeUser2();

console.log(user2.ref().name); // John
