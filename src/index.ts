import * as Koa from "koa";
import * as Router from "koa-router";
import * as logger from "koa-logger";
import * as json from "koa-json";

const PORT = 3000;

const app = new Koa();
const router = new Router();

router.get("/", async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = { message: "Hello World" };
  await next();
});

app.use(json());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
