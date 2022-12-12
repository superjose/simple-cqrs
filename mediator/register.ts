/**
 * This file must be included in index.ts
 *  */

import {
  GetAllPostsQueryHandler,
  CreateNewPostCommandHandler,
  GetUsersQueryHandler,
  RegisterUserCommandHandler,
} from "../bounded_contexts/index.ts";

/**
 * This is where the magic happens.
 * Every
 */

export const register = {
  REGISTER_USER: RegisterUserCommandHandler,
  GET_USERS: GetUsersQueryHandler,
  GET_POSTS: GetAllPostsQueryHandler,
  CREATE_POST: CreateNewPostCommandHandler,
};
