const express = require('express')
const app = express()

// app.use((req, res) => {
//     console.log('We got a new request')
//     // res.send('Hello, we got your request! This is a response')
//     // res.send({ name: 'Pasan', age: 25 })
//     res.send('<h1>This is my webpage!</h1>')
// })

app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/comments/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Viewing the comments of Post ID: ${postID} on the ${subreddit} subreddit</h1>`)
})

app.get('/cats', (req, res) => {
    res.send('Meow!')
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats')
})

app.get('/dogs', (req, res) => {
    res.send('Woof!')
})

app.get('/search', (req, res) => {
    console.dir(req.query)
    const { q } = req.query
    if (!q) res.send('Nothing found if nothing searched')
    res.send(`Search results for ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})