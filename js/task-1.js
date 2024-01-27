function slugify(title) {
  // Перетворюємо текст у нижній регістр
  title = title.toLowerCase();

  // Замінюємо проміжки на тире
  title = title.replace(/ /g, '-');

  // Замінюємо всі інші символи, які не є буквами або цифрами, на пусті символи
  title = title.replace(/[^a-z0-9-]+/g, '');

  // Повертаємо результат
  return title;
}
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"