/* https://learn.javascript.ru/task/hello-object

Привет, object
важность: 5
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта. */

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
