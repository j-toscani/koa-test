import Koa from "koa";

import logger from "koa-logger";
import json from "koa-json";

import router from "./router/router.js";

const PORT = 5000;

const app = new Koa();

app.use(json());
app.use(logger());
app.use(router.routes).use(router.methods);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
