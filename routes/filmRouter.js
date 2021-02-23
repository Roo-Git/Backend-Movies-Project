const routerFilms = require('express').Router();
const filmController = require('../controllers/filmController')
const filmSchema = require('../models/film')

// API routes

// Get all Films

routerFilms.get('/film', async (req, res) => {
    try {
        res.json(await filmController.findAllFilms())
    }catch (err) {
        return res.status(500).json({
           message: 'Internal Server Error'
        });
        console.log(err.message)
    }
});

// PROBANDO

routerFilms.get('/film/search',async (req, res) => {
    try {
        const title = await filmController.findByTitle(req.query);
        res.json(title);
    }catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

// Get film by ID

routerFilms.get('/film/:id',async (req, res) => {
    try {
        res.json(await filmController.findOne(id))
    }catch (err) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

// Create Film

routerFilms.post('/add-film',async (req, res) => {
    try{
        const id = await filmController.addFilm(new filmSchema(req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
})

routerFilms.put('/update-film:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await filmController.updateFilm(id,new filmSchema(req.body)));
    } catch( error ){
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerFilms.delete('/remove-film/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await filmController.deleteFilm(id);
        res.json({status,id});
    } catch( error ) {
        return res.status(500).json({
            message: 'Internal Server Error'
     });   
    }
 
 });

module.exports = routerFilms;