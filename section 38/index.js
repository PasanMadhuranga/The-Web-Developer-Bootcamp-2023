const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const Product = require('./models/product');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch((err) => {
        console.log("OH NO MONGO CONNECTION ERROR!!!")
        console.log(err)
    });

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    let products;
    const filter = req.query.category || 'all';
    if (filter === 'all') {
        products = await Product.find({})
    }else {
        products = await Product.find({category: filter})
    }
    res.render('products/index', { products, categories, filter })
})

// app.get('/products/filtered', async (req, res) => {
//     const filter = req.query.category || 'all';
//     if (filter === 'all') {
//         const products = await Product.find({})
//         res.render('products/index', { products, categories })
//     }else {
//         console.log(filter)
//         const products = await Product.find({category: filter})
//         res.render('products/filtered', { products, categories, filter })
//     }
// })

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/new', async (req, res) => {
    res.render('products/new', { categories });
})

app.get('/products/:id/update', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/update', { product, categories });
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.redirect(`/products/${ id }`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/show', { product })
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000")
})