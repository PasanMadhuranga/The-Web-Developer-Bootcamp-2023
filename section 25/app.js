const btn2 = document.querySelector("#V2")

btn2.onclick = function () {
    console.log("YOU CLICKED ME!!!")
    console.log("HUREEEEEEEEYYYYY")
}

function scream() {
    console.log("AAAAAAAAAHHHHHHHHH");
    console.log("STOP TOUCHING ME!");
}

btn2.onmouseenter = scream;

const headLine = document.querySelector("h1");

headLine.onmouseenter = function () {
    headLine.style.color = "red";
}

headLine.onmouseleave = function () {
    headLine.style.color = "black";
}

const btn3 = document.querySelector("#V3")

btn3.addEventListener('dblclick', function () {
    alert("CLICKED!");
})


function twist() {
    console.log("TWIST!");
}

function shout() {
    console.log("SHOUT!");
}

const tasBtn = document.querySelector("#tas");

// tasBtn.onclick = twist;
// tasBtn.onclick = shout;
// twist is overwritten by shout

tasBtn.addEventListener('click', twist, { once: true }); // once: true means it will only run once
tasBtn.addEventListener('click', shout);