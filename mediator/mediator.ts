import { MediatorCommandsAndQueries } from "./mediator-commands.ts";

const commands: {
  [x: string]: MediatorCommandsAndQueries["arg"];
} = {};

export function registerCommandOrQuery({
  type,
  arg,
}: MediatorCommandsAndQueries) {
  commands[type] = arg;
}

/**
 * If you have a better typing definition, that'd be sick!
 * @param param0
 * @returns
 */
export async function dispatch<TFunction extends (...args: any) => any>({
  type,
  arg,
}: MediatorCommandsAndQueries) {
  logTime(type);
  return (commands[type] as Function)(arg) as ReturnType<TFunction>;
}

function logTime(type: string) {
  console.log("This is so powerful, every command can be logged!");
  console.log("This can create a plugin architecture!");
}
