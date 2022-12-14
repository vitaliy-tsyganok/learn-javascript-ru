/* https://learn.javascript.ru/task/fibonacci-numbers

Числа Фибоначчи
важность: 5
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.

Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.

Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

Пример работы: */

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

// Решение 1
function fib(n) {
	const arr = [0, 1, 1];
	for (let i = 2; i < n; i++) {
		arr.push(arr[i] + arr[i - 1]);
	}
	return arr[n];
}

// Решение 2
function fib(num) {
	let a = 1;
	let b = 0;
	let temp;

	while (num > 0) {
		temp = a;
		a = a + b;
		b = temp;
		num--;
	}

	return b;
}
