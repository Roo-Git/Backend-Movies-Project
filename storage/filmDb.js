class Storage {

    // Propiedades Storage

    state = [];

    // Constructor Storage

    constructor () {

    };

    // Métodos Storage:

    // Colocar peliculas en state.
    async set(film) {
        return this.state.push(film)
    };

    // Obtener peliculas del state.
    async get() {
        return this.state;
    }

};

module.exports = Storage;