// for looop
//let array = [9, 8, 7, 6, 5, 4, 3, 2,1,0]
let numbers = {uno: " one", duo: "two"}
//for(let i = 0; i < array.length; i++){
  //  console.log(array[i])
//}

// for in  is for printing the index
for(let i in numbers){
  //  console.log(i)
}

// for of is use for the element
//for(let i of numbers){
//    console.log(i)
//}
// for in will give of the key wjen iterating through an object
for(let i of Object.values(numbers)){
    //console.log(i)
}
//console.log(Object.values(numbers))
//console.log(Object.keys(numbers))
//console.log(Object.entries(numbers))

// continue 
for(let i = 0; i < 10; i++){
    if(i === 5)continue
    if(i === 8)break
    console.log(i)
}