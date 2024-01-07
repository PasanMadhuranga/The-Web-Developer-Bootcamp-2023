function getRGBColour() {
    rgb = []
    for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * 255) + 1)
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

const buttons = document.querySelectorAll('button')

for (let btn of buttons) {
    btn.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');

for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = getRGBColour();
    this.style.color = getRGBColour();
}
