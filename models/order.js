const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const orderSchema = new Schema(
    {
        ownerId: {
            type: ObjectId,
            required: true
        },

        filmId: {
            type: ObjectId,
            required: true
        },
        dateInis: Date,
        dateEnd: Date

    });
const order = mongoose.model('order', orderSchema);
module.exports = order;