function makeArray(firstArray, secondArray, maxLength) {
  // Створюємо новий масив
  const newArray = [];

  // Додаємо елементи з першого масиву
  firstArray.forEach((element) => newArray.push(element));

  // Додаємо елементи з другого масиву
  secondArray.forEach((element) => newArray.push(element));

  // Якщо кількість елементів у новому масиві перевищує maxLength,
  // створюємо копію масиву з довжиною maxLength елементів
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  // В іншому випадку, повертає весь новий масив
  return newArray;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []