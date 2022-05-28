const express = require("express");
const cors = require("cors");
const conectarDb = require("./config/db");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const path = require("path");
require("dotenv").config();
const app = express();
app.use(express.json());

//connect to BD
conectarDb();

//Swagger doc
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node MongoDB API Starwars to create Ships",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};
app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

// Config of CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL,
};

app.use(cors(corsOptions));

//app routes
app.use("/api/interstellar-ships", require("./routes/ship"));

module.exports = { app };
