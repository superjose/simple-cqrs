export type GetUsersQuery = {
  sort?: "ascending" | "descending";
};

export function GetUsersQueryHandler(query: GetUsersQuery) {
  console.log("Perform the Get Users Query Here", query);
}
