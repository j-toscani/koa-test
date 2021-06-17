import { Next } from "koa";
import Router from "koa-router";
import { Context } from "vm";

const router = new Router();

router.get("/", async (ctx: Context, next: Next) => {
  ctx.body = { message: "Hello Lovely World" };
  await next();
});

const routes = router.routes();
const allowedMethods = router.allowedMethods();

export default {
  routes,
  methods: allowedMethods,
};
