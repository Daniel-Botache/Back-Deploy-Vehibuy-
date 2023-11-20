require("dotenv").config();
const { PORT } = process.env;
const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log("%s listening at 7183"); // eslint-disable-line no-console
  });
});
