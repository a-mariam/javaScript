let letters = ["m","e",'e','t','c','o','d','e']
let first = letters[0]
for (let l in letters) {
    if (first != letters[l]){
         first = letters[l]
        console.log(l)
        return l
    }
}
console.log("secongd   ")
let m = {l,o,v,e,l,e,e,t,c,o,d,e}
let f = m[0]
let count = 0
for(const l of m){
    if(f == m[l]){
        count++
    }
    console.log(count)
    return count
}
