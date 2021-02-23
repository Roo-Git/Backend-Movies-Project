const user = require('../models/user');


class User {

    constructor(){

    }

    // Buscar todos los users
    async findAllUsers(userCollection){
        return user.find(userCollection);
    };


    // POST Agregar un user

    async addUser(name){
        return user.create(name)
    };   

    
    // GET Buscar por ID

    async findById(id){
        return user.findById(id)
    };

    // DELETE Borrar por ID   PROBANDO

    async deleteUser(id) {
        return user.findByIdAndDelete(id)
    };
};

let userController = new User();
module.exports = userController;