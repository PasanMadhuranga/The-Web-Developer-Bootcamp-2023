console.log(document.querySelector('p').innerText)
document.querySelector('p').innerText = 'I am being changed using JS'

const allLinks = document.querySelectorAll('a')

allLinks.forEach(link => {
  link.innerText = 'I am a link'
})

document.querySelector('h1').innerHTML = "<i>" + document.querySelector('h1').innerText + "</i>"

document.querySelector('h1').innerHTML += "<sup>TM</sup>"

document.querySelector('#banner').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwN4OZjJ_g4vEWfCXKBzcqqrxXi_MHDmXaFA&usqp=CAU"

document.querySelector('input[type="text"]').setAttribute('placeholder', 'Enter your name')

const h1 = document.querySelector('h1')

console.log(window.getComputedStyle(h1))
console.log(window.getComputedStyle(h1).color)
console.log(window.getComputedStyle(h1).fontSize)
console.log(window.getComputedStyle(h1).fontFamily)

console.log(h1.style)

h1.style.color = 'red'
h1.style.fontSize = '6em'

for(let link of allLinks) {
  link.style.color = 'green'
    link.style.textDecorationStyle = 'wavy'
    link.style.textDecorationColor = 'orange'
}