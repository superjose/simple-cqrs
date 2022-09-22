export type RegisterUserCommand = {
  username: string;
  password: string;
};

export function RegisterUserCommandHandler(cmd: RegisterUserCommand) {
  console.log("Apply the registration user command handler", cmd);
}
