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

    async findById({id: id}){
        return user.findOne({id: id})
    };

    // DELETE Borrar por ID 

    async deleteUser({id: id}) {
        const idFound = user.findOne({id: id})
        return idFound.remove()
    };
};

let userController = new User();
module.exports = userController;