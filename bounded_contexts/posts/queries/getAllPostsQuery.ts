export type GetAllPostsQuery = {
  userId: string;
};

export async function GetAllPostsQueryHandler(query: GetAllPostsQuery) {
  console.log("Getting  all the posts", query);
  await Promise.resolve();
  return;
}
