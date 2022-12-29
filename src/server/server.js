import express from "express";
import { readFileSync } from "fs";
import { join, resolve } from "path";
import { createServer as createViteServer } from "vite";

(async () => {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    const template = await vite.transformIndexHtml(
      req.originalUrl,
      readFileSync(resolve("index.html"), "utf-8")
    );
    const server = await vite.ssrLoadModule(join("src/client/server.jsx"));

    const appHtml = await server.render();
    const style = await server.renderStyle();

    const html = template
      .replace("<!--root-->", appHtml)
      .replace("<!--head-->", style);
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });
  app.listen(3000);
})();
