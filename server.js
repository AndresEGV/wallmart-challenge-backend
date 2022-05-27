const express = require("express");
const cors = require("cors");
const conectarDb = require("./config/db");

const app = express();
app.use(express.json());

//conectar a BD
conectarDb();

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

//rutas de la app
app.use("/api/interstellar-ships", require("./routes/ship"));

module.exports = { app };
