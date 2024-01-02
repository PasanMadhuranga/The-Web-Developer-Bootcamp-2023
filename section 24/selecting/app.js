const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}


const banner = document.getElementById('banner');
console.dir(banner);

const allImgs = document.getElementsByTagName('img');

for (let image of allImgs) {
    console.log(image.src);
    // image.src = "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
    // change every image to a picture of a cat
}


const squareImgs = document.getElementsByClassName('square');

for (let img of squareImgs) {
    img.src = "https://images.unsplash.com/photo-1620510625142-b45cbb784397?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9rZXJ8ZW58MHx8MHx8fDA%3D"
}


// querySelector: returns the first element that matches a given CSS-style selector
console.log(document.querySelector('#banner'));
console.log(document.querySelector('.tocsection-2')); 
console.log(document.querySelector('a[title="Southeast Asia"'));

// querySelectorAll: returns a list of elements that matches a given CSS-style selector
console.log(document.querySelectorAll('#banner'));
console.log(document.querySelectorAll('.tocsection-2')); 
console.log(document.querySelectorAll('ul .toclevel-2'));

const links = document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href);
}