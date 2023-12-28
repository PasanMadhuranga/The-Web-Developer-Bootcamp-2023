// first function with zero parameters
function printHeart() {
    console.log("<3")
}

printHeart() // prints: <3


// second function with one parameter
function greet(person){
    console.log(`Hello ${person}`)
}

greet("Pasan") // prints: Hello Pasan


// third function with two parameters
function greet2(person1, person2){
    console.log(`Hello ${person1} and ${person2}`)
}

greet2("Pasan", "Lasantha") // prints: Hello Pasan and Lasantha

function repeat(message, times){
    let result = ""
    for (let i = 0; i < times; i++){
        result += message
    }
    console.log(result)
}

repeat("I love you! ", 3) // prints: I love you! I love you! I love you!


// function with return value
function add(x, y){
    if (typeof x !== "number" || typeof y !== "number"){
        return false
    }
    return x + y
}

console.log(add(1, 2)) // prints: 3
console.log(add("1", "2")) // prints: false
console.log(add(add(1, 2), add(3, 4))) // prints: 10