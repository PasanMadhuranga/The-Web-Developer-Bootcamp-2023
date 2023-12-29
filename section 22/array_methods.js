// for each
const numbers = [1, 4, 3, 32, 45, 65, 2, 4, 53, 18, 1, 7]

numbers.forEach ( function (n) {
    if (n % 2 === 0) {
        console.log(n)
    }
}
)

function square (x) {
    console.log(x * x)
}

numbers.forEach(square) // not very common

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90   
    }
]

movies.forEach( function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})


// map
const doubles = numbers.map(function (num) {
    return num * 2;
})

console.log(doubles)

const movieTitles = movies.map(function (movie){
    return movie.title;
})

console.log(movieTitles)


// arrow functions
const sum = (x, y) => {
    return x + y;
}

console.log(sum(12, 93))

const calcSquare = x => {
    return x * x;
} // if only one parameter, no need for parenthesis

console.log(calcSquare(12))

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
) // if only one line of code, no need for curly braces

console.log(rollDie())

const isEven = num => num % 2 === 0; // you can further simplify arrow functions if there is only one parameter and one line of code

console.log(isEven(12))

// using arrow functions with map
const shows = movies.map(movie => `${movie.title} - ${movie.score/10} IMDB`)
console.log(shows.forEach(show => console.log(show)))


// setTimeout: runs a function after a certain amount of time has passed
console.log('Hello!')
setTimeout(() => {
    console.log('...are you still there?')
}, 3000)
console.log('Goodbye!')

// setInterval: runs a function every x amount of time
const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

// clearInterval(id) // stops the interval


// filter
const nums = [22, 34, 5, 6, 7, 8, 9, 10, 12, 13, 14, 23, 12, 11, 9, 41, 29]

const oddNums = nums.filter(num => num % 2 === 1)
console.log(oddNums)

const movies2 = [
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
    },
    {
        title: 'The Iron Giant',
        score: 80,
        year: 1999
    },
    {
        title: 'Groundhog Day',
        score: 77,
        year: 2007
    }
]

const recentMovies = movies2.filter(m => m.year > 2000).map(m => m.title)
console.log(recentMovies)


// every and some
const examResults = [80, 98, 92, 78, 77, 88, 89, 84, 81, 77, 100]

if (examResults.every(r => r >= 75)){
    console.log("everyone passed")
}else{
    console.log("someone failed")
}

if (examResults.some(r => r === 100)){
    console.log("someone got a perfect score")
}else{
    console.log("no one got a perfect score")
}


// reduce
const avgResult = examResults.reduce((acc, curr) => acc + curr) / examResults.length
console.log(avgResult)

const minResult = examResults.reduce((min, curr) => {
    if (curr < min) return curr;
    return min;
})

console.log(minResult)

const highestRatedMavie = movies2.reduce((bestM, currM) => {
    if (currM.score > bestM.score) return currM;
    return bestM;
})

console.log(highestRatedMavie)


//  arrow functions & this
const person = {
    firstName: 'Pasan',
    lastName: 'Madhuranga',
    fullName () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this)
            console.log(this.fullName())
        }, 3000)
    }
}