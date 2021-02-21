const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const orderSchema = new Schema({
    id: { 
        type: ObjectId 
    },
    filmId: { 
        type: String,
        required: true
    },
    userId: { 
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: new Date
    },
    paymentMethod: {
        type: Number, 
        enum: [visa, masterCard, paypal, bizum, amex, cash, bankTransfer],
        required: true
    }
})

const order = mongoose.model('order', orderSchema);
module.exports = order;