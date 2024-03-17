const express= require('express')
const app = express()

const cookieParser = require("cookie-parser");

app.use(cookieParser())
app.use(cookieParser("thisismysecret"))

app.get('/greet', (req, res) => {
    const { name = "No-name" } = req.cookies
    res.send(`HEY THERE ${name}`)
});

app.get('/cookies', (req, res) => {
    res.cookie('name', 'Pasan');
    res.cookie('animal', 'cow');
    res.send("OK SENT YOU A COOKIE!!!")
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed : true });
    res.send("OK SIGNED YOUR FRUIT COOKIE!!!")
});

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})