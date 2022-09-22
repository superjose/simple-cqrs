import { MediatorCommandsAndQueries } from "./mediator-commands.ts";

/**
 * We implement the mediator pattern by having an object handle both keys
 * and functions.
 *
 * Note, that you may like to create 2 objects. One for commands,
 * and the other for queries, as one of the purpose of this approach is
 * to optimize each action (Reads are 10x more frequent than writes and can
 * leverage a cache).
 *
 * The beauty of this, is that you can perform optimizations to the code in a central
 * place, and your actual business logic won't be affected.
 */
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
 *
 * We then dispatch the function that we have stored by calling its key value.
 * This will create a separation of the code, slim your controllers, and reduce
 * dependencies.
 *
 * You could work out additional logic to make this dispatch pluggable.
 * For example, the logTime function down below works as a universal logger.
 * It will log all the commands and print out the time it started to execute.
 *
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
  console.log(`Starting ${type} at ${Date.now()}`);
}
