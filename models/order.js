const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const orderSchema = new Schema({
        ownerId: {
            type: ObjectId,
            reference: "User",
            required: true
        },

        filmId: {
            type: ObjectId,
            reference: "Film",
            required: true
        },
        dateInis: Date,
        dateEnd: Date

    });
const order = mongoose.model('order', orderSchema);
module.exports = order;