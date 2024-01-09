const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${url}`);
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOUR FAKE DATA HERE');
            }
            reject('Request Error!');
        }, 2000)
    })
}

fakeRequest("books.com/library")
    .then((data) => {
        console.log("Data is:", data);
    })
    .catch((err) => {
        console.log("OH NO!", err);
    })


const colorChange = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, 1000)
    })
}

colorChange('red')
    .then(() => colorChange('orange'))
    .then(() => colorChange('yellow'))
    .then(() => colorChange('green'))
    .then(() => colorChange('blue'))
    .then(() => colorChange('indigo'))
    .then(() => colorChange('purple'))
