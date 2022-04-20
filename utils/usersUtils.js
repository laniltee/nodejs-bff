export const formatUsersResponse = (usersResponse) => {
  return usersResponse.map((user) => ({
    name: user.name,
    email: user.email,
    id: user.id,
  }));
};
