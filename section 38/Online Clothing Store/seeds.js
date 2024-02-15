const Cloth = require('./models/cloth')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ClothingStore')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch((err) => {
        console.log("OH NO MONGO CONNECTION ERROR!!!")
        console.log(err)
    });

// const c = new Cloth({
//     name: 'Moose Comfort Fit Crew Neck T Shirt',
//     price: 12,
//     category: 'gents',
//     sizes: ['S', 'M', 'L', 'XL'],
//     image: 'https://firebasestorage.googleapis.com/v0/b/onlineclothingstore-47dfb.appspot.com/o/testImg.jpg?alt=media&token=094f00f6-ee80-451b-96a9-4b1093fbf13b'
// })

// c.save()
//     .then(c => console.log(c))
//     .catch(e => console.log(e))

const seedClothes = [
    {
        name: 'Moose Comfort Fit Crew Neck T Shirt',
        price: 12,
        category: 'gents',
        sizes: ['S', 'M', 'L', 'XL'],
        qty: 8,
        image: 'https://firebasestorage.googleapis.com/v0/b/onlineclothingstore-47dfb.appspot.com/o/testImg.jpg?alt=media&token=094f00f6-ee80-451b-96a9-4b1093fbf13b'
    },
    {
        name: 'Half Cotton Handloom Saree',
        price: 20.57,
        category: 'ladies',
        sizes: ['S', 'M', 'L'],
        qty: 10,
        image: 'https://firebasestorage.googleapis.com/v0/b/onlineclothingstore-47dfb.appspot.com/o/saree.jpg?alt=media&token=10846364-af08-4208-bbe2-01cb5426948b'
    },
    {
        name: 'Baby cotton frock',
        price: 8.55,
        category: 'kids',
        sizes: ['XS','S', 'M', 'L', 'XL'],
        qty: 12,
        image: 'https://firebasestorage.googleapis.com/v0/b/onlineclothingstore-47dfb.appspot.com/o/BabyCottonFrock.jpg?alt=media&token=d01248e8-7323-4c3e-838b-1397f584ad1a'
    }
]

Cloth.insertMany(seedClothes)
    .then(res => console.log(res))
    .catch(e => console.log(e))