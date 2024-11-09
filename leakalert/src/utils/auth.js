export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token; // Returns true if a token is found, otherwise false
  };