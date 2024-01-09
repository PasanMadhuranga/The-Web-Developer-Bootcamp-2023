// 1st Method
// setTimeout(function () {
//     document.body.style.backgroundColor = 'red';
// }, 1000);

// setTimeout(function () {
//     document.body.style.backgroundColor = 'orange';
// }, 2000);

// setTimeout(function () {
//     document.body.style.backgroundColor = 'yellow';
// }, 3000);


// 2nd Method
// setTimeout(function () {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(function () {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(function () {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(function () {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(function () {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(function () {
//                         document.body.style.backgroundColor = 'indigo';
//                         setTimeout(function () {
//                             document.body.style.backgroundColor = 'violet';
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// 3rd Method
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {
                    delayedColorChange('indigo', 1000, () => {
                        delayedColorChange('violet', 1000)
                    })
                })
            })
        })
    })
})