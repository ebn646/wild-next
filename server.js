const express = require("express");
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {

  const server = express();

  // here you could do some express stuff if you fancy, eg. running custom middleware or offering an API
  // server.get('/api', (req, res) => {
  //   return res.send({ version: 1.0 })
  // });

  // always make sure the handler is the last route entry
  server.use(handler);

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000"); // eslint-disable-line no-console
  });

});
