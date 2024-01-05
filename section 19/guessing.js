let limit = parseInt(prompt("Welcome! Enter your max number:"));

while (!limit) {
    limit = parseInt(prompt("Enter a valid number:"))
}

const targetNum = Math.floor((Math.random() * limit) + 1);
let guessCount = 1;

let guess = prompt("Enter your first guess: (Type 'q' to quit)");
while (true) {
    if (guess === "q") {
        console.log("OK, YOU QUIT!")
        break
    }

    guess = parseInt(guess);

    if (!guess) {
        guess = prompt("Enter a valid number:");
        continue;
    }

    if (guess === targetNum) {
        console.log("CONGRATS YOU WIN!");
        console.log(`It took you ${guessCount} guesses.`);
        break;
    }

    if (guess < targetNum) {
        guess = prompt("Too low. Guess Again:");
    } else {
        guess = prompt("Too High. Guess Again");
    }
    guessCount++;
}


