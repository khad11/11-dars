//1-masala

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];
// function getNamesByGrade(students, grade) {
//   return students
//     .map((students) => {
//       if (students.percent > 60 && students.percent < 70) {
//         return { ...students, grade: 3 };
//       } else if (students.percent >= 70 && students.percent < 85) {
//         return { ...students, grade: 4 };
//       } else {
//         return { ...students, grade: 5 };
//       }
//     })
//     .filter((students) => students.grade == grade)
//     .map((students) => students.name);
// }
// const result = getNamesByGrade(students, 5);
// console.log(result);
//2-masala
// //2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)
//// Input: const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
///// Output: {
// ///    dog: 2,
////c    chicken: 3,
//  //   cat: 1,
//  //   rabbit: 1
// //}\
// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "rabbit",
// const all = animals.reduce((acc, curVal) => {
//   if (acc[curVal]) {
//     acc[curVal] = acc[curVal] + 1;
//   } else {
//     acc[curVal] = 1;
//   }
//   return acc;
// }, {});
// console.log(all);
//// 3.  Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)
// const originalMassiv = [1, 2, 3, 4, 5];
// const kvadratMassiv = originalMassiv.map((square) => {
//   return square * square;
// });
// console.log(kvadratMassiv);
//// 4.  Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce
// const num = [1, -4, 12, 0, -3, 29, -150];
// const numbers = num
//   .filter((num) => num > 0)
//   .reduce((acc, curVal) => (acc += curVal), 0);
// console.log(numbers);
////5-masala
// //Satrdagi so’zlarning bosh harflarini oling. (split, map, join)
// const text = "George Raymond Richard Martin";
// const result = text
//   .split(" ")
//   .map((item) => item[0])
//   .join("");
////6-masala
////6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
// const ages = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// const result = ages.sort((a, b) => a.age - b.age);
// console.log(result[0]);
// console.log(result.at(-1));
////7-masala
//// 7.  N ta elementdan iborat massiv berilgan.
//// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)
// const element = [10, 15, 20, 22, 24, 27, 32, 33, 35, 36, 44, 47, 50, 60];
// const odd = element.filter((el) => el % 2 == 0);
// const even = element.filter((el) => el % 2 == 1);
// console.log(odd, even);
////8-masala
////8.  N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)
// const element = [10, 15, 20, 22, 24, 27, 22, 15];
// //9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)
////9-masala
// const products = [
//   { id: 1, name: "Smartphone", price: 699, rating: 4.8, discount: 10 },
//   { id: 2, name: "Laptop", price: 999, rating: 4.5, discount: 15 },
//   { id: 3, name: "Headphones", price: 199, rating: 4.2, discount: 5 },
//   { id: 4, name: "Smartwatch", price: 299, rating: 4.6, discount: 20 },
//   { id: 5, name: "Tablet", price: 499, rating: 4.3, discount: 12 },
// const result = {};
// result.sortedById = products.slice().sort((a, b) => a.id - b.id);
// result.sortedByName = products
//   .slice()
//   .sort((a, b) => a.name.localeCompare(b.name));
// result.sortedByPrice = products.slice().sort((a, b) => a.price - b.price);
// result.sortedByRating = products.slice().sort((a, b) => b.rating - a.rating);
// result.sortedByDiscount = products
//   .sort((a, b) => a.discount - b.discount);
//// 10-masala
//// 10. Rating bo'yicha eng kuchli product topilsin. (sort)
// const bestRating = products.sort((a, b) => {
//   return b.rating - a.rating;
// })[0];
// console.log(bestRating.rating);
//// 11-masala
////11. Narxi eng past bo'lgan product topilsin. (sort)
// const cheapPrice = products.sort((a, b) => {
//   return a.price - b.price;
// console.log(cheapPrice.price, cheapPrice.name);
////12-masala
////12. Barcha products narxlari yig'indisi topilsin. (reduce)
// const product = [
// const allPrice = product.reduce((acc, curVal) => acc + Number(curVal.price), 0);
// console.log(allPrice);
// // 13-masala
////13. Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)
// const productName = product.map((allName) => allName.name);
// console.log(productName);
//// 14-masala
////14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)
//   { id: 6, name: "TV", price: 300, rating: 5.3, discount: 22 },
// const product5Id = product.find((productId) => {
//   if (productId.id == 5) {
//     return productId;
// console.log(product5Id);
//// 15-masala
////15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
// const deleteProduct = products.filter((product) => {
//   return product.id !== 4;
// console.log(deleteProduct);
//// 16-masala
/////16. Berilgan satrni faqatgina harflardan iborat ekanligiga tekshiring (split, every)
//// otilmagan mavzu!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//// 17-masala
////17. Massiv truthy va falsy elementlardan tuzilgan. O’sha massivdagi truthy va falsy elementlarni alohida massivlarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
// function getTruthyFalsy(arr) {
//   const truthy = arr.filter(Boolean);
//   const falsy = arr.filter((item) => !Boolean(item));
//   return { truthy, falsy };
// const input = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// const result = getTruthyFalsy(input);
////18-masala
//// 18. Satr berilgan. Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring. (split, map)Input: "Men Abdulaziz Programmerman"Outpu: [3, 9, 13]
// function getWordLengths(str) {
//   const lengths = str.split(" ").map((word) => word.length);
//   return lengths;
// const text = "men Muhammadqodir web-dasturchiman";
// const result = getWordLengths(text);
////19-masala
////19. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)

// const text = "men Muhammadqodir web-dasturchiman";
// const alltext = text.split("").some((harf) => harf !== "");
// console.log(alltext);

////20-masala
////20. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat massiv qaytaring. (Object.entries, map, join)
const num = { a: 2, b: 5, c: 7 };
cons;
