export type CreateNewPostCommand = {
  userId: string;
  post: {
    title: string;
    content: string;
  };
};

export function CreateNewPostCommandHandler(cmd: CreateNewPostCommand) {
  console.log("I am creating a new post!", cmd);
  return Promise.resolve({
    title: cmd.post.title,
    content: cmd.post.content,
  });
}
