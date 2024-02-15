const mongoose = require('mongoose');

const clothSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['ladies', 'gents', 'kids']
    },
    sizes: {
        type: [String],
        uppercase: true,
        enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    },
    image: {
        type: String
    },
    qty: {
        type: Number,
        default: 0
    }
})

const Cloth = mongoose.model('Cloth', clothSchema);

module.exports = Cloth;