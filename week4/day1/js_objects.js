
// let student = ["Ahmed", "1212", "0501512521", -1500, "Java"]

// console.log(student[4])
// console.log(student[2])

// let student = {
//     name: "Ahmed",
//     id: "1212",
//     dateOfBirth: new Date(1990, 8, 15),
//     mobile: "0501512521",
//     balance: -1500,
//     course: "Java",
//     getAge: function() {
//         return new Date().getFullYear() - this.dateOfBirth.getFullYear();
//     }
// }

function Student(name, id, dateOfBirth, mobile, balance, course) {
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
    this.mobile = mobile;
    this.balance = balance;
    this.course = course;
}

Student.prototype.getAge = function() {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear();
}

let st1 = new Student("Ahmed", "121", new Date(1990, 5, 18) , "0501512521", -1500, "Java");
let st2 = new Student("Mohamed", "221", new Date(1992, 7, 18) , "0501522521", -1500, "Java");


console.log(st1);
console.log(st1.course);
console.log(st1.mobile);
console.log(st1.getAge());



// console.log(st2.course);
// console.log(st2.mobile);
// console.log(st2.getAge());
// console.log(st2);

for (let prop in st2) {
    console.log(st2[prop]);
}