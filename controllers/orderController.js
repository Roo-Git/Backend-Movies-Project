const order = require('../models/order');

class Rental {

    constructor(){

    }

    //POST - Create a new Order 

    async createOrder(rental){
        return order.create(rental)
    };


    //GET - Return all Rentals in the DB AQUIIIIII

    async findAllOrders(getAllOrders){
        return order.find(getAllOrders);
    };


}

let orderController = new Rental();
module.exports = orderController;