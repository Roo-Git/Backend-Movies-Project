// Requerimos express a una constante.

const express = require('express');

const app = express()

const port = 3000;

// Escucha del puerto 3000 en la consola.

app.listen(port, () => console.log(`Listening at ${port}`));