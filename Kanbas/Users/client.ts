import axios from "axios";
export const USERS_API = process.env.REACT_APP_API_URL;
export const signin = async (user) => { ... };
export const profile = async () => {
  const response = await axios.post(`${USERS_API}/profile`);
  return response.data;
};

  