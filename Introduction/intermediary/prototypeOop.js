function Employee(name, phoneNumber, designation){
    this.name = name
    this.phoneNumber = phoneNumber
    this.designation = designation
}
    

//     this.printDetails = () => {
//         return `My name is ${this.name} \n You can contact me via
//         ${this.phoneNumber}. I am the ${this.designation} of sulty bank`
//     };

//     this.company = "Sulty Bank"
// }
Employee.prototype.isVerified = true;
employee1.isVerified = false;

let employee1 = Employee("Joe Botman", "+2345627722", "manager");
let employee2 = Employee("Lily Botman", "+23456278398", "cook");
// console.log(employee1.printDetails())
// console.log(employee2.printDetails())
console.log(employee1.__proto__ === employee2.__proto__)
console.log(employee1.company === employee2.company)
console.log(employee1.isVerified)
console.log(employee1.isVerified)