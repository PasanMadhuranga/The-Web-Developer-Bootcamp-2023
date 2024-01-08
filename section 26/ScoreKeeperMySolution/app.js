const displayP1Score = document.querySelector("#p1Score")
const displayP2Score = document.querySelector("#p2Score")
const scoreLimitSelector = document.querySelector("#scoreLimit")
const incP1Btn = document.querySelector("#p1Inc")
const incP2Btn = document.querySelector("#p2Inc")
const reset = document.querySelector("#reset")

let p1Score = 0
let p2Score = 0
let scoreLimit = 4

function updateScoreLimit() {
    scoreLimit = parseInt(scoreLimitSelector.value)
    resetGame()
}

incP1Btn.addEventListener('click', function () {
    p1Score++;
    displayP1Score.textContent = p1Score
    if (p1Score === scoreLimit) {
        displayP1Score.style.color = "hsl(141, 71%, 48%)" // green
        displayP2Score.style.color = "hsl(348, 100%, 61%)" // red
        incP1Btn.disabled = true
        incP2Btn.disabled = true
    }
});

incP2Btn.addEventListener('click', function () {
    p2Score++;
    displayP2Score.textContent = p2Score
    if (p2Score === scoreLimit) {
        displayP2Score.style.color = "hsl(141, 71%, 48%)" // green
        displayP1Score.style.color = "hsl(348, 100%, 61%)" // red
        incP1Btn.disabled = true
        incP2Btn.disabled = true
    }
});

reset.addEventListener('click', function () {
    resetGame()
});

function resetGame() {
    p1Score = 0
    p2Score = 0
    displayP1Score.textContent = p1Score
    displayP2Score.textContent = p2Score
    displayP1Score.style.color = "black"
    displayP2Score.style.color = "black"
    incP1Btn.disabled = false
    incP2Btn.disabled = false
}