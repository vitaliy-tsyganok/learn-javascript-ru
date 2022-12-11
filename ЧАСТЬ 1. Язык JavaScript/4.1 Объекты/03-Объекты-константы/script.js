/* https://learn.javascript.ru/task/const-object

Объекты-константы?
важность: 5
Можно ли изменить объект, объявленный с помощью const? Как вы думаете? */

const user = {
	name: 'John',
};

// это будет работать?
user.name = 'Pete';

// Ответ. Да, конечно, потому что объект - это ссылочный тип, переменная user хранит только ссылку на объект. Редактируя свойство объекта user через user.name = 'Pete' мы изменяем объект в памяти, при этом сама переменная user никак не изменяется.

// SyntaxError: Identifier 'user' has already been declared
const user = 'abc'