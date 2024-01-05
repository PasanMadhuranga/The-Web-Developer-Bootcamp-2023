for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 100; i >= 0; i -= 10) {
    console.log(i);
}

// nested loops
for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`);
    for (let j = 1; j < 4; j++) {
        console.log(`   j is: ${j}`);
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
];

for (let i = 0; i < seatingChart.length; i++) {
    for (let j = 0; j < seatingChart[i].length; j++) {
        console.log(seatingChart[i][j]);
    }
}

// while loops
let count = 0;
while (count < 10) {
    count++;
    console.log(count);
}

const SECRET = 'BabyHippo';
let guess = prompt('enter the secret code...');
while (guess !== SECRET) {
    guess = prompt('enter the secret code...');
}
console.log('CONGRATS YOU GOT THE SECRET!!!');

// break keyword
let input = prompt("Hey, say something!");
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me")
        break;
}
console.log("OK YOU WIN!");


const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

for (let subreddit of subreddits) {
    console.log(subreddit);
}


for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

for (let student in testScores) {
    console.log(`${student} scored ${testScores[student]}`);
}

console.log(Object.keys(testScores)); // returns an array of keys
console.log(Object.values(testScores)); // returns an array of values
console.log(Object.entries(testScores)); // returns an array of arrays of key-value pairs