// function as an expression is a function passed into a variable eg
let func = function(value){
    let answer = value * value
    return answer;
}
function d (){
    return "it's a beautifull day"
}

// classwork
// write a function that returns a function and pass the result of the function into a variable console.log the result of the function

function add(value){
    return d()
}
let result = add()
console.log(result)

function plus(value){
    console.log(value + 1)
}

// ForEach u cannot return it back to an array

let arr = [2, 3, 4, 5, 6, 7, 8]
arr.forEach((x) => {
    process.stdout.write(`${x} `);
})
arr.forEach((x) => plus(x))
// filter gets 

let results = arr.filter((x) => x > 7);
console.log(results)

// find the element that meets the conditiion
let f = arr.find((x) => x > 7)
console.log(f)
// find index of element that meets the conditiion
let s = arr.findIndex((x) => x <= 7)
console.log(s)

// maps loop thriugh an returns a new aray as result
let mapValue = arr.map((x *y))


// reduce loop throungh an array and add each of the element in the array until it is one
let reduceValure = arr.reduce((x, y) => x + y);
