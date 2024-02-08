const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!")
        console.log(err)
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    categories: {
        type: [String],
        default: ['cycling']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

productSchema.methods.greet = function() {
    console.log("HELLO!!!! HI!!! HOWDY!!!")
    console.log(`- from ${this.name}`)
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function() {
    return this.updateMany({}, {onSale: true, price: 0});
}

const Product = mongoose.model('Product', productSchema);

// const bike = new Product({name: 'Cycling Bike', price: 656, categories: ['cycling', 'outdoor'], qty:{online: 12}})
// bike.save()
//     .then(data => {
//         console.log("IT WORKED")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!!!")
//         console.log(err)
//     })

// Product.findOneAndUpdate({name: 'Cycling Bike'}, {price: 824}, {new: true, runValidators: true})
//     .then(data => {
//         console.log("IT WORKED")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!!!")
//         console.log(err)
//     })


const findProduct = async () => {
    const foundProduct = await Product.findOne({name: 'Cycling Bike'})
    foundProduct.greet()
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory('sports')
    console.log(foundProduct)
}

// findProduct()

Product.fireSale().then(res => console.log(res))