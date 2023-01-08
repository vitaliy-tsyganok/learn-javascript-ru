/* https://learn.javascript.ru/task/dictionary-tostring

Добавьте toString в словарь
важность: 5
Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.

Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

Вот так это должно работать: */

// ваш код, который добавляет метод dictionary.toString
// Решение через добавление дескриптора в Object.create вторым аргументом
let dictionary = Object.create(null, {
	toString: {
		value() {
			return Object.keys(this).join();
		},
	},
});

// Альтернативное решение через defineProperty
Object.defineProperty(dictionary, 'toString', {
	value() {
		return Object.keys(this).join();
	},
});

// добавляем немного данных
dictionary.apple = 'Apple';
dictionary.__proto__ = 'test'; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
	console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"
