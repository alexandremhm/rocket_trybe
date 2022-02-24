const getLocalStorage = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return token;
  }
  return null;
};

export default getLocalStorage;
