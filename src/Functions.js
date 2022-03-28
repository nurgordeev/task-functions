/*
Напишите коллбек для array.filter, который отбирает все числа больше num
 */
export function higherThan(num) {
	return (value) => {
		return value > num
	}
	console.log([1, 2, 3, 4, 5].filter(higherThan(3)));
}

/*
Напишите коллбек для array.filter, который отбирает из массива все строки, включающие в себя substr. Регистр важен.
 */
export function hasSubstring(substr) {
	return (value) => {
		return value.includes(substr)
	}
	console.log(['ABC', 'abc', 'bca', 'qwe'].filter(hasSubstring('bc')));
}
/*
Напишите функцию `multiply(num)`, которая работает вот так:
	
console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
	return (value) => {
		return value * num
	}
	console.log(multiply(5)(10));
}
