import { Application, Context, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

const getUsers = [
  async (ctx: Context) => {
    const users = [{ id: "userId", name: "username@test.pl" }];
    ctx.response.body = users;
  },
];

router.get("/api/users", ...getUsers);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
