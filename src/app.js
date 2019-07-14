import exppress from "express";
import routes from "./routes";

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

export default new App().server;
