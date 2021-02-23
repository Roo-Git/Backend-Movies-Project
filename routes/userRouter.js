const routerUser = require('express').Router();
const userController = require('../controllers/userController');
const userSchema = require('../models/user')





// Obtener Users

routerUser.get('/user', async (req, res) => {
    try {
        res.json(await userController.findAllUsers())
    }catch (err) {
        return res.status(500).json({
           message: 'Internal Server Error'
        });
    }
});

// Crear User

routerUser.post('/add-user',async (req, res) => {
    try{
        const id = await userController.addUser(new userSchema(req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    };
});


// CREAD ID

routerUser.get('/user/:id',async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await userController.findById(id))
    }catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

// ELIMNAR USER por ID PROBANDO

routerUser.delete('/remove/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await userController.deleteUser(id);
        res.json({status,id});
    } catch( error ) {
        return res.status(500).json({
            message: 'Internal Server Error'
     });   
    }
 
 });

module.exports = routerUser;