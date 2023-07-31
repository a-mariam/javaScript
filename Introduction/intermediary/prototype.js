let vehicle = {wheels: 4, canMove: true};
let car ={seats: 4,
__prototype__: vehicle};
let driver = {__prototype__: car};

// console.log(vehicle.toString());
// console.log(vehicle.__prototype__);
// console.log(car.__prototype__);
// console.log(car.hasOwnProperty("seats"))
// console.log(car.hasOwnProperty("toString"))
// console.log(car.wheels)
// console.log(car.hasOwnProperty("wheels"))
 console.log(driver.hasOwnProperty("wheels"))