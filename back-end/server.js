const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require("cors");
const WSServer = require("ws").Server;
const server = require("http").createServer();
const initService = require("./services/init");
const port = 8080;

const app = express();

app.locals = {
  cashPoints: [],
  employees: [],
  customersAtCashPoints: [],
  customersInShop: []
};

const configure = async app => {
  (app.locals.cashPoints = await initService.cashpoints()),
    (app.locals.employees = await initService.employees()),
    (app.locals.customersAtCashPoints = await initService.customersAtCashPoints()),
    (app.locals.customersInShop = await initService.customersInShop());
  app.use(cors());
  app.use(bodyParser.json());
  // app.use(session);

  app.use("/api", router);
  // app.use("/", express.static("../student-planner-front/dist"));
};

configure(app);

// Create web socket server on top of a regular http server
let wss = new WSServer({
  server: server
});

// Also mount the app here
server.on("request", app);

wss.on("connection", ws => {
  ws.on("message", async function incoming(message) {
    ws.send(
      JSON.stringify({
        employees: app.locals.employees,
        cashPoints: app.locals.cashPoints,
        customersInShop: app.locals.customersInShop,
        customersAtCashPoints: app.locals.customersAtCashPoints
      })
    );
  });
});

server.listen(port, function() {
  console.log(`http/ws server listening on ${port}`);
});
