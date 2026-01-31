// Map and Filter were important in react

//map
let numbers = [1, 2, 3, 4];
let double = numbers.map((num) => num * 2);
console.log(double);

//filter
let evenNum = numbers.filter((num) => num % 2 === 0);
console.log(evenNum);

//--------------------------------------------------------------------
let students = [
  { name: "Gowtham", marks: 97 },
  { name: "Arun", marks: 43 },
  { name: "Sujey", marks: 76 },
];

// map
let name = students.map((student) => student.name);
console.log(name);

//filtre
let passStudents = students.filter((student) => student.marks >= 50);
console.log(passStudents);
