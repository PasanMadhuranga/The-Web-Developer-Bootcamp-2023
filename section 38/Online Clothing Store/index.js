const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const Cloth = require('./models/cloth');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/ClothingStore')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch((err) => {
        console.log("OH NO MONGO CONNECTION ERROR!!!")
        console.log(err)
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

const categoriesArr = ['ladies', 'gents', 'kids'];
const sizesArr = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

app.get('/clothes', async (req, res) => {
    const clothes = await Cloth.find({});
    res.render('clothes/index', { clothes, categoriesArr, sizesArr, catFilter: 'all' })
})

app.post('/clothes', async (req, res) => {
    Cloth.create(req.body)
        .then(c => {
            res.redirect(`/clothes/${c._id}`);
        })
        .catch(e => {
            console.log(e);
            res.redirect('/clothes/new');
        })    
})

app.get('/clothes/filter', async (req, res) => {
    const { price, catFilter } = req.query;
    let clothes;
    if (catFilter === 'all'){
        clothes = await Cloth.find({ price: { $lte: price } });
    }else {
        clothes = await Cloth.find({ price: { $lte: price }, category: catFilter });
    }
    res.render('clothes/index', { clothes, price, categoriesArr, sizesArr, catFilter });
})

app.get('/clothes/new', (req, res) => {
    res.render('clothes/new', { categoriesArr, sizesArr });
})

app.get('/clothes/:id', async (req, res) => {
    const { id } = req.params;
    const cloth = await Cloth.findById(id);
    res.render('clothes/show', { cloth });
})

app.delete('/clothes/:id', async (req, res) => {
    const { id } = req.params;
    await Cloth.findByIdAndDelete(id);
    res.redirect('/clothes');
})

app.put('/clothes/:id', async (req, res) => {
    const { id } = req.params;
    const cloth = await Cloth.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/clothes/${cloth._id}`);
})

app.get('/clothes/:id/edit', async (req, res) => {
    const { id } = req.params;
    const cloth = await Cloth.findById(id);
    res.render('clothes/edit', { cloth, categoriesArr, sizesArr });
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})