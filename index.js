const { app } = require("./server");
require("dotenv").config();
//Port
const port = process.env.PORT || 4000;
//Run the app
app.listen(port, "0.0.0.0", () => {
  console.log(`Server up in port ${port}`);
});
