const routerUser = require('express').Router();
const userController = require('../controllers/userController');
const userSchema = require('../models/user')





// Obtener Users

routerUser.get('/user', async (req, res) => {
    try {
        res.json(await userController.findAllUsers())
    }catch (err) {
        return res.sendStatus(500).json({
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
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    };
});


// CREAD ID

routerUser.get('/user/:id',async (req, res) => {
    try {
        res.json(await userController.findOne(id))
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

// ELIMNAR USER por ID PROBANDO

routerUser.delete('/user/remove/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await filmController.deleteUser(id);
        res.json({status,id});
    } catch( error ) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
     });   
    }
 
 });

module.exports = routerUser;