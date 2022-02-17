export const getLoggedInUser = () => {
  const signedUser = JSON.parse(localStorage.getItem("userDetails"));
  return signedUser;
};
