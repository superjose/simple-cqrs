/**
 * deno run --allow-net deno.ts
 */
import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import "./mediator/register.ts";
import { dispatch } from "./mediator/mediator.ts";
const router = new Router()
  .get("/posts", async (ctx) => {
    await dispatch({
      type: "GET_POSTS",
      arg: {
        userId: "get user Id from token",
      },
    });
  })
  .post("/posts", async (ctx) => {
    await dispatch({
      type: "CREATE_POST",
      arg: {
        post: {
          content: "the content",
          title: "the title",
        },
        userId: "The user Id",
      },
    });
  })
  .get("/users", async (ctx) => {
    await dispatch({
      type: "GET_USERS",
      arg: {
        sort: "ascending",
      },
    });
  })
  .post("/users", async (ctx) => {
    await dispatch({
      type: "REGISTER_USER",
      arg: {
        password: "pass",
        username: "user",
      },
    });
  });
const port = 8000;
console.log(`Listening on port: ${port}`);
await new Application().use(router.routes()).listen({ port });
