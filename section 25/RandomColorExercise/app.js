function getRGBColour() {
    rgb = []
    for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * 255) + 1)
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}

const colourBtn = document.querySelector("button")
const head = document.querySelector("h1")

colourBtn.addEventListener("click", () => {
    newColour = getRGBColour()
    head.innerText = newColour
    document.body.style.backgroundColor = newColour
})