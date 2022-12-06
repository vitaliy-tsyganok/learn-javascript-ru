/* https://learn.javascript.ru/task/if-question

Вопрос о "if"
важность: 5
Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)? */

if (-1 || 0) alert('first') // alert выполнится, if(-1)
if (-1 && 0) alert('second') // alert не выполнится, if(0)
if (null || (-1 && 1)) alert('third') // alert выполнится, if(1)
