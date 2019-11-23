const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
let port = 8080;

const app = express();
app.use(bodyParser.json());

app.use("/api", router);

app.listen(port, () => {
  console.log("Server is running on: " + port);
});

app.get("/", (req, res) => {
  res.status(200).send({ message: "API Ready" });
});
