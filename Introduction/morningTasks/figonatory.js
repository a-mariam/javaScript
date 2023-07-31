// printing on one line "process.stdout.write('${first}, {second},)"
let first = 0
let second = 1
let temp = 0
let count = 0
process.stdout.write(`${first}, ${second},`)
while(count < 15){
temp = second
first = first + temp
second = first + second
process.stdout.write(`${first}, ${second},`)
count++
}