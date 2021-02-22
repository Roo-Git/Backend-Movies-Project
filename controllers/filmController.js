const movie = require('../models/film');


class Film {

    constructor(){

    }

    //GET - Return all Films in the DB

    async findAllFilms(filmCollection){
        return movie.find(filmCollection);
    };

    //GET - Return a Film with specified ID

    async findById({id: id}) {
        return movie.findOne({id: id});
    };

    //GET - Return a Film with Title PROBANDO

    async findFilm(film) {
        return movie.findOne(film);
    };
    
    //POST - Insert a new Film in the DB

    async addFilm(film){
       return movie.create(film)
    };

    //PUT - Update a Film already exists

    async updateFilm(id, title){
        const idFound = movie.findOne({id: id})
        return idFound.update(title)
    };

    //DELETE - Delete a Film with specified ID

    async deleteFilm({id: id}) {
        const idFound = movie.findOne({id: id})
        return idFound.remove()
    };
};

let filmController = new Film();
module.exports = filmController;