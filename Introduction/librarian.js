const prompt = require('prompt-sync')();
let id = prompt('enter id:\t')
let available = prompt('enter availability: \t ')
let count = prompt('enter count: \t')
let name = prompt('enter name: \t')
let author = prompt('enter author: \t')


let librarian = {
id: parseInt(id),
available: available = true,
count: parseInt(count),
name: name,
author: author
}
console.log("name --> ", librarian.name)
librarian.id = 900

 console.log('Id --> ', librarian.id)

 console.log('Availability --> ', librarian.available)
 console.log("Author --> ",librarian.author)
 console.log('Count --> ',librarian.count)