 function largestOdd(string){
   for(let c = string.length -1; c > 0; c ++){
    if(Number(string[c]) % 2 != 0){
        return string.slice(0, c + 1)
    }
   } 
   return ""
 }
 function sum(a , b){
  return a + b
 }

 console.log(largestOdd("52"))
 console.log(sum(2,4))
 module.exports = largestOdd