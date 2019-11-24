const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const { Employee } = require("./models");
const cors = require("cors");
let port = 8080;

const app = express();

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

wss.on("connection", function connection(ws) {
  ws.on("message", async function incoming(message) {
    const employees = await Employee.findAll({ raw: true });

    ws.send(
      JSON.stringify({
        answer: employees
      })
    );
  });
});

server.listen(port, function() {
  console.log(`http/ws server listening on ${port}`);
});
