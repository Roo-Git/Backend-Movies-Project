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
        deafault: 'user'
    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;