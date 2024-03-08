const express = require('express');
const app = express();
const morgan = require('morgan')
const AppError = require('./AppError')

app.use(morgan('dev'))

app.use((req, res, next) => {
    req.requestTime = Date.now()
    console.log(req.method.toLowerCase(), req.path)
    next()
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS")
    next()
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'pasan'){
        return next()
    }
    // res.send('SORRY YOU NEED A PASSWORD')
    // throw new Error('Password Required')
    throw new AppError('Password Required', 401)
}

// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!!!")
//     return next()
// })

// app.use((req, res, next) => {
//     console.log("SECOND MIDDLEWARE")
//     return next()
// })

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('This is the home page!')
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('Woof!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('Cocacola Secret Recipe')
})

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not an admin', 403)
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND')
})

app.use((err, req, res, next) => {
    console.log("**************************************")
    console.log("***************ERROR******************")
    console.log("**************************************")
    // res.status(500).send("OH BOY WE GOT AN ERROR")
    next(err)
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('App is listening on port 3000!')
})