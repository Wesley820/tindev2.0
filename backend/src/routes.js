import { Router } from "express";
const routes = Router();

routes.get("/", async (request, response) => {
  return response.json({ ok: true });
});

export default (app) => app.use("/api", routes);