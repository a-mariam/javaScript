let raw_array = []
let row1 = []
let row2 = []
let row3 = []
let obj1 = {
    name: "lagos",
    population: 20000,
    temp: 2.3,
    currency: "NG"
};
// raw_array.push(obj1)
//console.log(raw_array)

let obj2 = {
    name: "kano",
    population: 20000,
    temp: 2.3,
    currency: "NG"
};
let obj3 = {
    name: "abuja",
    population: 90000,
    temp: 5.9,
    currency: "NG"
};
row1.push(null, obj1, obj2, obj3)

let obj4 = {
    name: "abuja",
    population: 90000,
    temp: 5.9,
    currency: "NG"
};

let obj5 = {
    name: "abuja",
    population: 90000,
    temp: 5.9,
    currency: "NG"
};

let obj6 = {
    name: "abuja",
    population: 90000,
    temp: 5.9,
    currency: "NG"
};
row2.push(obj4, obj5, obj6, null)
let obj7 = {
    name: "abuja",
    population: 90000,
    temp: 5.9,
    currency: "NG"
};
let obj8 = {
    name: "abuja",
    population: 90000,
    temp: 5.9,
    currency: "NG"
};
let obj9 = {
    name: "abuja",
    population: 90000,
    temp: 5.9,
    currency: "NG"
};
row3.push(obj7, null, obj8, obj9)

raw_array.push(row1, row2, row3)
let total = 0
//one loop
for(let i in raw_array){
    raw_array[i]
     .filter((innerArray) => innerArray != null)
     .filter((innerArray) => ["temp"] <= 10)   
}


console.table(raw_array)
// entering in the index of ths array, that is the row
for(let i in raw_array){
 //looping through each of the element in each array  
   for(let j = 0; j < raw_array[i].length; j++){
    // validating that it skips the null inner array
        if(raw_array[i][j] === null) continue
        // checking that the the temperature is not greater than 10
        if(raw_array[i][j].temp <= 10){
        // adding the populations
            total += raw_array[i][j].population
        }
    }
}
console.log("Total = ", total)
