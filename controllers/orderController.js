const rental = require('../models/order');



class Order {

    constructor(){

    };

    async indexAll() {
        return rental.find().limit(10);
    }

    async indexByCustomer(userId) {
        return rental.find({userId:userId}).limit(10);
    }

    async store(order) {
        return rental.create(order);
    }

    async update(id, order) {    
        return rental.findByIdAndUpdate(id, order);
    }

    async destroy(id) {
        return rental.findByIdAndRemove(id);
    }



}


let orderController = new Order();
module.exports = orderController;
