const express = require("express");
const cors = require("cors");
const conectarDb = require("./config/db");
require("dotenv").config();
const app = express();
app.use(express.json());

//connect to BD
conectarDb();

// Config of CORS

const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

app.use(cors(corsOptions));

//app routes
app.use("/api/interstellar-ships", require("./routes/ship"));

module.exports = { app };
