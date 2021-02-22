const userRouter = require('express').Router();
const userController = require('../controllers/userController');
const userSchema = require('../models/user')





// Obtener Users

userRouter.get('/user', async (req, res) => {
    try {
        res.json(await userController.findAllUsers())
    }catch (err) {
        return res.sendStatus(500).json({
           message: 'Internal Server Error'
        });
    }
});


userRouter.post('/add-user',async (req, res) => {
    try{
        const id = await userController.addUser(new userSchema(req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

module.exports = userRouter;