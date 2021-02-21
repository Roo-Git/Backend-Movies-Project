const filmDatabase = require("../storage/filmDb");
const filmModel = require('../models/film');


let database = new filmDatabase();


class FilmController {
    
    

    constructor(){
        // this.database = new filmDatabase();
    }


    //MÉTODOS CRUD 


    //CREATE -C- Dar un alta

    async createFilm(req,res){
        
        let body = req.body;

        try {
            
            let film = new filmModel(body.id,body.title,body.year,body.description,body.image,body.genre,body.adult);
            
            let seteo = await database.set(film);
            
            if(seteo){
                res.send("Bien!!!!!!!! hemos guardado");
            }
            
        }catch {
            console.log("error!");
        }


        return
    }

    //READ -R- Traernos datos

    async bringFilms(req,res){
        try {
            let getting = await database.get();

            if(getting){
                res.send(getting)
            }
        }catch (error) {
            console.log(error)
        }
    }

    //UPDATE -U- Modificar datos

    

    //DELETE -D- Borrar datos

}


let filmController = new FilmController;
module.exports = filmController;