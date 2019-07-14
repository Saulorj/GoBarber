import { Router } from "express";
const routes = new Router();

routes.get("/", (req, res) => {
  console.log("rodando...");
  res.json({ ok: true });
});

export default routes;
