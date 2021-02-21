const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    id: { 
        type: ObjectId 
    },
    name: { 
        type: String,
        required: true,
        deafault: 'Pepe'
    },
    image: {
        type: String,
    },
    creationDate: {
        type: Date,
        default: new Date,
        required: true
    },
    birthDate: { 
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: { 
        type: Number,
        required: true
    },
    country: { 
        type: String,
        required: true
    },
    address: { 
        type: String,
        required: true
    },
    personalId: { 
        type: String,
        required: true
    },
    genre: { 
        type: String, 
        enum:
        {
            "Male": 0,
            "Female": 1,
            "Other": 2,
        }
    },
    paymentMethod: {
        type: Number, 
        enum: [visa, masterCard, paypal, bizum, amex, cash, bankTransfer],
        required: true
    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;