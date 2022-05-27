const { app } = require("./server");

//puerto
const port = process.env.PORT || 4000;
//Arrancar la app
app.listen(port, "0.0.0.0", () => {
  console.log(`Server up in port ${port}`);
});
