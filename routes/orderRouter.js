const routerOrders = require('express').Router();
const orderController = require('../controllers/orderController');


//POST - Create a new Order in the DB
routerOrders.post('/add-order',async (req, res) => {
    try{
        const id = await orderController.createOrder(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.status(404).json({
            message: "Movie or User not found"
        });
    }
});


//GET - Return all Order in the DB AQUIIIIIIIIIII
routerOrders.get('/order-list', async (req, res) => {
    try {
        res.json(await orderController.findAllOrders())
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});


module.exports = routerOrders;