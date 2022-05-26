const express = require("express");
const conectarDb = require("./config/db");
const app = express();

//conectar a BD
conectarDb();

//puerto
const port = process.env.PORT || 4000;

app.use(express.json());

//Arrancar la app
app.listen(port, "0.0.0.0", () => {
  console.log(`Server up in port ${port}`);
});
