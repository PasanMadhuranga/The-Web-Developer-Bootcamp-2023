const form = document.querySelector('#shelterForm');
const catName = document.querySelector('#catName');
const catList = document.querySelector('#catList');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newCat = document.createElement('li')
    newCat.innerText = catName.value
    catList.appendChild(newCat)
    catName.value = ''
});