function filterArray(numbers, value) {
  // Створи порожній масив, у який будеш додавати підходящі числа.
  const filteredNumbers = [];

  // Ітерація кожного елемента масиву numbers.
  for (const number of numbers) {
    // Перевірка кожного елемента і додавання до свого масиву.
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  // Повернення свого нового масиву з підходящими числами як результат.
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]