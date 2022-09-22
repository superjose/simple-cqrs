import {
  CreateNewPostCommand,
  CreateNewPostCommandHandler,
  GetAllPostsQuery,
  GetAllPostsQueryHandler,
  GetUsersQuery,
  GetUsersQueryHandler,
  RegisterUserCommand,
  RegisterUserCommandHandler,
} from "../bounded_contexts/index.ts";

export type MediatorCommandsAndQueries =
  | {
      type: "REGISTER_USER";
      arg: RegisterUserCommand | typeof RegisterUserCommandHandler;
    }
  | {
      type: "GET_USERS";
      arg: GetUsersQuery | typeof GetUsersQueryHandler;
    }
  | {
      type: "GET_POSTS";
      arg: GetAllPostsQuery | typeof GetAllPostsQueryHandler;
    }
  | {
      type: "CREATE_POST";
      arg: CreateNewPostCommand | typeof CreateNewPostCommandHandler;
    };
