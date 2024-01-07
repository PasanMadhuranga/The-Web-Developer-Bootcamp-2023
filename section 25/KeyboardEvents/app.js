const h1 = document.querySelector('h1');
const input = document.querySelector('input');

// The change fires only when the input loses focus
// input.addEventListener('change', function (e) {
//     alert('CHANGE!');
// });

// The input event fires whenever the value changes
input.addEventListener('input', function (e) {
    h1.innerText = input.value;
});