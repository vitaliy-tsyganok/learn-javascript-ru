/* https://learn.javascript.ru/task/replace-for-while

Замените for на while
важность: 5
Перепишите код, заменив цикл for на while, без изменения поведения цикла. */

for (let i = 0; i < 3; i++) {
	alert(`number ${i}!`)
}

// Решение
{
	let j = 0
	while (j < 3) {
		alert(`number ${j}!`)
		j++
	}
}
console.log(j) // Reference error, обернув блок кода в фигурные скобки была создана блочная область видимости, благодаря чему удалось избежать создания глобальной переменной j