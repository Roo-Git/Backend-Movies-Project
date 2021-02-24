const routerOrders = require('express').Router();
const orderController = require('../controllers/orderController');
const orderSchema = require('../models/order')


// 

routerOrders.post('/order', async (req,res) => {
    try {
        const id = await orderController.create(new OrderModel(req.body));
        res.json(id);
    }catch(error) {
        return res.status(500).json({
            message: 'Server Error: ' + error
        });
    }
});

routerOrders.get('/order/:id', async (req, res) => {
    try{
        const order = await orderController.get(req.params.id);
        if(!order){
            res.sendStatus(404);
        }else{
            res.json(order);
        }
    }catch (error) {
        return res.status(500).json({
            message: 'Server Error: ' + error
        });
    }
});
module.exports = routerOrders;