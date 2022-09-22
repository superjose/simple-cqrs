/**
 * This file must be included in index.ts
 *  */

import {
  GetAllPostsQueryHandler,
  CreateNewPostCommandHandler,
  GetUsersQueryHandler,
  RegisterUserCommandHandler,
} from "../bounded_contexts/index.ts";
import { registerCommandOrQuery } from "./mediator.ts";

/**
 * This is where the magic happens.
 * Every
 */
registerCommandOrQuery({
  type: "REGISTER_USER",
  arg: RegisterUserCommandHandler,
});
registerCommandOrQuery({
  type: "GET_USERS",
  arg: GetUsersQueryHandler,
});
registerCommandOrQuery({
  type: "GET_POSTS",
  arg: GetAllPostsQueryHandler,
});
registerCommandOrQuery({
  type: "CREATE_POSTS",
  arg: CreateNewPostCommandHandler,
});
