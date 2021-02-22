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


};

let userController = new User();
module.exports = userController;