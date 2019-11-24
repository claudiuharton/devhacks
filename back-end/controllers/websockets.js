const { Employee } = require("../models");

module.exports = ws => {
  ws.on("message", async function incoming(message) {
    const employees = await Employee.findAll({ raw: true });

    ws.send(
      JSON.stringify({
        employees,
        shop
      })
    );
  });
};
