const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const orderSchema = {
    film_id: { 
        type: [ObjectId],
        ref: 'Movie',
        required: true
    },
    user_id: { 
        type: [ObjectId],
        ref: 'User',
        required: true
    },   
}

const order = mongoose.model('order', orderSchema);
module.exports = order;