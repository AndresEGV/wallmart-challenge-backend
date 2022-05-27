const express = require("express");
const conectarDb = require("./config/db");

const app = express();

//conectar a BD
conectarDb();

app.use(express.json());
//rutas de la app
app.use("/api/interstellar-ship", require("./routes/ship"));

module.exports = { app };
