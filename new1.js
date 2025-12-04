// let numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i < numbers.length; i++) {
//     let printNum = () => {
//         console.log(numbers[i]);
//     };
//     printNum();
// }

// let names = ["Deepak", "Aman", "Sharvan", "Ankit", "Tanishka"];

// for (let i = 0; i < names.length; i++) {
//     if (names[i].length > 5) {
//         console.log(names[i], "- Long Name");
//     } else {
//         console.log(names[i], "- Short Name");
//     }
// }
// let student = {
//     name: "Deepak",
//     age: 24,
//     city: "Kolkata"
// };

// for (let key in student) {
//     console.log(key + ":", student[key]);
// }/
// let students = [
//     { name: "Deepak", age: 21, city: "Kolkata" },
//     { name: "Aman", age: 20, city: "Bhopal" },
//     { name: "Sharvan", age: 22, city: "Indore" }
// ];

// for (let i = 0; i < students.length; i++) {
//     let showName = () => {
//         console.log("Student Name:", students[i].name);
//     };
//     showName();
// }

// let isAdult = (age) => {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// };

// let ages = [12, 18, 25, 16, 30];

// for (let i = 0; i < ages.length; i++) {
//     console.log(ages[i], "→", isAdult(ages[i]));
// }
// let numbers = [10, 45, 23, 89, 56];
// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log("Largest number is:", largest);

// const data = { a: 10, b: 20, c: 30 };

// let { a, c } = data;

// console.log(a, c);
// let obj1 = { name: "Deepak", age: 21 };
// let obj2 = { city: "Kolkata", hobby: "Cricket" };

// let merged = { ...obj1, ...obj2 };

// console.log(merged);
// let marks = [45, 67, 89, 32, 51, 76];
// let count = 0;

// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > 50) {
//         count++;
//     } else {
//         // do nothing
//     }
// }

// console.log("Marks greater than 50:", count);

// let cities = ["Delhi", "Mumbai", "Kolkata", "Indore"];

// for (let i = 0; i < cities.length; i++) {
//     let showCity = () => {
//         console.log(i + " → " + cities[i]);
//     };
//     showCity();
// }

