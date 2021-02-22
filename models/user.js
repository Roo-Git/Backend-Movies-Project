const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    name: { 
        type: String,
        required: true,
        deafault: 'user'
    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;