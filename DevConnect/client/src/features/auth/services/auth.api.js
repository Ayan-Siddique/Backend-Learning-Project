import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function login(userName, password) {
  const response = await authApi.post("/login", {
    userName,
    password,
  });

  return response.data;
}

export async function register(userName, fullName, email, password) {
  const response = await authApi.post("/resgister", {
    userName,
    fullName,
    email,
    password,
  });

  return response.data;
}
