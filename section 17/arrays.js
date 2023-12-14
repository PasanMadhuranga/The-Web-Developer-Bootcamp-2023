// adding an element outside the array
let colors = ['Yellow', 'Pink', 'Purple']
colors[8] = 'Indigo'
console.log(colors)
console.log(colors[6])

// push and pop
let movieLine = ['tom', 'jerry']
movieLine.push('pasan')
movieLine.push('harry')
console.log(movieLine)
let person = movieLine.pop()
console.log(movieLine)
console.log(person)

// shift and unshift
console.log(movieLine.shift())
movieLine.unshift('dimalsha')
console.log(movieLine)

// concat
let cats = ['Blue', 'Kitty', 'Milo']
let dogs = ['Rusty', 'Wyatt']
let pets = cats.concat(dogs)
console.log(pets)

// includes
console.log(pets.includes('Blue'))
console.log(pets.includes('blue'))

// indexOf
console.log(pets.indexOf('Rusty'))
console.log(pets.indexOf('rusty'))

// reverse: destructive method
pets.reverse()
console.log(pets)

// slice
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
console.log(fruits.slice(1, 3)) // index 1 and 2
console.log(fruits.slice(2)) // index 2 to end
console.log(fruits.slice()) // copy of the array

// splice: destructive method
let months = ['Jan', 'March', 'April', 'June', 'July']
console.log(months.splice(1, 0, 'Feb')) // index 1, delete 0, add 'Feb': returns deleted elements as an array []
console.log(months)
months.splice(4, 2, 'May') // index 4, delete 2, add 'May'
console.log(months)
console.log(months.splice(3, 2)) // index 3, delete 2: returns deleted elements as an array ['April', 'May']
console.log(months)
months.splice(3, 0, 'April', 'May') // index 3, delete 0, add 'April', 'May'
console.log(months)

// Arrays + Const
const myEggs = ['brown', 'white']   // const doesn't prevent array from being modified
myEggs.push('purple')
console.log(myEggs)
// myEggs = ['blue', 'pink']   // error: Assignment to constant variable.

// Nested Arrays
const gameBoard = [['X', 'O', 'X'], ['O', null, 'X'], ['O', 'O', 'X']]
console.log(gameBoard)
console.log(gameBoard[1][2])