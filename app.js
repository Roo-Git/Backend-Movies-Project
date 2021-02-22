const express = require('express');
const app = express()
const db = require('./db');
const port = 3000;
const routerFilms = require('./routes/filmRouter')
const routerUsers = require('./routes/userRouter')


// Middleware
app.use(express.json())
app.use(routerFilms);    
app.use(routerUsers)


// Start server // Escucha del puerto 3000 en la consola con el comando 'npm start' en la Terminal.
db
.then(() => {
    app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err) => console.log(err.message));