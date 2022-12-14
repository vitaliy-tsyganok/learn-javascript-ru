/* https://learn.javascript.ru/task/string-new-property

Можно ли добавить свойство строке?
важность: 5
Взгляните на следующий код: */

let str = 'Привет';

str.test = 5;

alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?

// Ответ
// Если строгий режим, то ошибка на 9 строчке, иначе alert выведет undefined.
// Примитивы - это не объекты, они не могут хранить в себе свойства. Доступ к методам осуществляется через временную объект-обертку, который сразу же удаляется после выполнения операции.
