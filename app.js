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
// console.log(result);

////6-masala
////6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).

// const ages = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// const result = ages.sort((a, b) => a.age - b.age);
// console.log(result[0]);
// console.log(result.at(-1));

////7-masala
//// 7.  N ta elementdan iborat massiv berilgan.
//// Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)

const element = [10, 15, 20, 22, 24, 27, 32, 33, 35, 36, 44, 47, 50, 60];
const odd = element.filter((el) => el % 2 == 0);
const even = element.filter((el) => el % 2 == 1);
console.log(odd, even);

////8-masala
////8.  N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)
