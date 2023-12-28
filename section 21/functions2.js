// Lexical Scope
function bankRobbery() {
  const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batman'];
  function cryForHelp() {
    function inner() {
      for (let hero of heroes) {
        console.log(`Please help us, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp();
}

bankRobbery();


// Function Expressions
const add = function (x, y) {
    return x + y;
    }

add(4, 5); // 9


// Higher Order Functions: functions that operate on/with other functions (can accept other functions as arguments and/or return a function)
function callTenTimes(f){
    for(let i = 0; i < 10; i++){
        f();
    }
}

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

callTenTimes(rollDie)


function makeBetweenFunc(min, max){
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18)
console.log(isChild)
console.log(isChild(10))// true
console.log(isChild(30))// false


// Methods: functions that live inside of objects
const myMath = {
    PI: 3.14,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }
}

console.log(myMath.square(2)) // 4
console.log(myMath.cube(2)) // 8

// new shorthand
const myMath2 = {
    PI: 3.14,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}


// The Keyword 'this'
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWWW`);
    }
}

console.log(cat.meow()) // Blue Steele says MEOWWWW


// Try/Catch
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log('Please pass a string next time!');
    }
}

yell(1) 