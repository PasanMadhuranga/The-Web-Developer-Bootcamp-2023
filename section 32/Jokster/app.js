const jokes = require('give-me-a-joke')
const colors = require('colors');

console.dir(jokes)

// To get a random dad joke
jokes.getRandomDadJoke(function (joke) {
    console.log("DAD JOKE: ", joke.rainbow);
});


console.log('hello'.green.bgCyan); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass