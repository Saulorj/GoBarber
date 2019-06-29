const exppress = require("express");
const routes = require("./routes");

class App {
  constructor() {
    this.server = exppress();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(exppress.json());
  }
  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
