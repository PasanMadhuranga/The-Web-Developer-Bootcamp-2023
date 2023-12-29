// default params
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

console.log(rollDie(20));
console.log(rollDie());


// spread in function calls
const nums = [13, 4, 5, 6, 7, 8, 19, 10, 3, 1, 4, 5];
console.log(Math.max(nums)); // NaN
console.log(Math.max(...nums)); // 19

console.log('hello'); // hello
console.log(...'hello'); // h e l l o

// spread with array literals
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
const allPets = [...cats, ...dogs, 'Molly'];
console.log(allPets);
const catsCopy = [...cats];
console.log(catsCopy);
console.log(cats === catsCopy); // false

console.log([...'hello']); // ['h', 'e', 'l', 'l', 'o']


// spread with object literals
const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };
const dog = { ...canine, isPet: true };
console.log(dog); // {isFurry: true, family: "Caninae", isPet: true}
const catDog = { ...feline, ...canine };
console.log(catDog); // {legs: 4, family: "Caninae", isFurry: true} // family: "Felidae" is overwritten by the second object

// practical use case
const dataFromForm = {
    email: 'pasan@gmail.com',
    password: 'sdfsdf',
    username: 'pasan123',
};

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };


// arguments object
function showArgs(initialValue){
    console.log(initialValue); // 1
    console.log(arguments); // [1, 2, 3, 4, 5]
}

console.log(showArgs(1, 2, 3, 4, 5));

// rest params
function sum(divider, ...nums){
    console.log(divider); // 10
    console.log(nums); // [2, 3, 4, 5]
    return nums.reduce((acc, el) => acc + el * divider, 0);
}

console.log(sum(10, 2, 3, 4, 5)); // 140


// destructuring arrays
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];
const [gold, silver, bronze, ...everyoneElse] = scores;
console.log(gold); // 929321
console.log(silver); // 899341
console.log(bronze); // 888336
console.log(everyoneElse); // [772739, 543671, 243567, 111934]


// destructuring objects
const user = {
    email: 'pasan@gmail.com',
    password: 'sdfsdf',
    username: 'pasan123',
    firstName: 'Pasan',
    lastName: 'Madhuranga',    
    born: 2001
};

const {email, firstName, lastName} = user;
console.log(email); // pasan@gmail
console.log(firstName); // Pasan
console.log(lastName); // Madhuranga

const {born: birthYear, died: deathYear = 'Not Dead'} = user; // we can rename the property name and set a default value
console.log(birthYear); // 2001
console.log(deathYear); // Not Dead


// nested destructuring
const user2 = {
    email: 'efdsaef',
    password: 'sdfsdf',
    username: 'pasan123',
    firstName: 'Pasan',
    lastName: 'Madhuranga',
    born: {
        day: 1,
        month: 1,
        year: 2001
    }
};

const {born: {month: birthMonth}} = user2;

console.log(birthMonth); // 1


// destructuring params
function fullName({firstName, lastName = ''}){
    return `${firstName} ${lastName}`;
}

const me = {
    firstName: 'Pasan',
    lastName: 'Madhuranga',
    age: 22,
    degree: 'BSc'
};  

console.log(fullName(me)); // Pasan Madhuranga

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
];

const structuredMovies = movies.map(({title, score, year}) => (
    `${title} (${year}) is rated ${score}`
));

console.log(structuredMovies)