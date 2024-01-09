const colorChange = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, 1000)
    })
}

// colorChange('red')
//     .then(() => colorChange('orange'))
//     .then(() => colorChange('yellow'))
//     .then(() => colorChange('green'))
//     .then(() => colorChange('blue'))
//     .then(() => colorChange('indigo'))
//     .then(() => colorChange('purple'))


const rainbow = async () => {
    await colorChange('red')
    await colorChange('orange')
    await colorChange('yellow')
    await colorChange('green')
    await colorChange('blue')
    await colorChange('indigo')
    await colorChange('purple')
    return 'All done!'
}

rainbow().then((msg) => console.log(msg))
