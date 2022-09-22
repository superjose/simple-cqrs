/**
 * This works in any JavaScript environment: Web, Node, Deno, Bum.
 *
 * This import statement is important as it will register all of our
 * commands and queries so they can be dispatched later on.
 */
import { dispatch } from "./mediator/mediator";
import "./mediator/register";

async function main() {
  await createUser({
    username: "the username",
    password: "the password",
  });
}

type CreateUserInput = {
  username: string;
  password: string;
};

export async function createUser(input: CreateUserInput) {
  await dispatch({
    type: "REGISTER_USER",
    arg: input,
  });
}
