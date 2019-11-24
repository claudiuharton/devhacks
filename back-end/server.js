const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require("cors");
const websockets = require("./controllers/websockets");
let port = 8080;

const app = express();

app.locals = {
  cashPoints: [],
  employee: [],
  customersAtCashPoints: [],
  customersInShop: []
};

const configure = app => {
  app.use(cors());
  app.use(bodyParser.json());
  // app.use(session);

  app.use("/api", router);
  // app.use("/", express.static("../student-planner-front/dist"));
};

configure(app);

let WSServer = require("ws").Server;
let server = require("http").createServer();

// Create web socket server on top of a regular http server
let wss = new WSServer({
  server: server
});

// Also mount the app here
server.on("request", app);
const { Employee } = require("./models");

wss.on("connection", ws => {
  ws.on("message", async function incoming(message) {
    const employees = await Employee.findAll({ raw: true });

    ws.send(
      JSON.stringify({
        employees,
        some: app.locals.cashPoints
      })
    );
  });
});

server.listen(port, function() {
  console.log(`http/ws server listening on ${port}`);
});
