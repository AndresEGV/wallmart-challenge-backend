const express = require("express");
const conectarDb = require("./config/db");

const app = express();
app.use(express.json());
//conectar a BD
conectarDb();

//rutas de la app
app.use("/api/interstellar-ships", require("./routes/ship"));

module.exports = { app };
