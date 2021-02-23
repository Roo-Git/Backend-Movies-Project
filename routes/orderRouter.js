const routerOrder = require('express').Router();
const orderController = require('../controllers/orderController');
const orderSchema = require('../models/order')


// Obtener pedido por ID PROBANDO

routerOrder.get('/order/:id', async (req, res) => {
    try {
        res.json(await orderController.findById(id))
    }catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    };
});

module.exports = routerOrder;