export const getUserName = () => {
  const getUserDetails = JSON.parse(localStorage.getItem("userDetails"));
  return getUserDetails.name;
};
