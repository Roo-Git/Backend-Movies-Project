// Requerimos express a una constante.

const express = require('express');
const app = express()
const db = require('./db');
const port = 3000;



// Middleware
app.use(express.json())

app.use(routerFilms);


// Start server // Escucha del puerto 3000 en la consola con el comando 'npm start' en la Terminal.
db
.then(() => {
    app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err) => console.log(err.message));