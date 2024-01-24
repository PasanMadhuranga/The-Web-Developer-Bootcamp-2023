const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    data ? res.render('subreddit', { ...data }) : res.render('notfound', { subreddit })
})

app.get('/cats', (req, res) => {
    const cats = ['molly', 'kitty', 'sophie', 'coolie']
    res.render('cats', { allCats: cats })
})

app.get('/random', (req, res) => {
    const rand = Math.floor(Math.random() * 100) + 1;
    res.render('random', { rand })
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})