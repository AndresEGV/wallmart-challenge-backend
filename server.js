const express = require("express");
const cors = require("cors");
const conectarDb = require("./config/db");
require("dotenv").config();
const app = express();
app.use(express.json());

//connect to BD
conectarDb();

// Config of CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // can access to API
      callback(null, true);
    } else {
      // forbidden
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

//app routes
app.use("/api/interstellar-ships", require("./routes/ship"));

module.exports = { app };
