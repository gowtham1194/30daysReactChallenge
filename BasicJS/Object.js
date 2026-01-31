let student = {
  name: "Arun",
  marks: 85,
  address: {
    city: "Salem",
    state: "TN",
  },
};

//
let { name, marks } = student;
console.log(name, marks);
//
console.log(student.address.city);
//
let updatedstudent = { ...student, marks: 90 };
console.log(updatedstudent);
