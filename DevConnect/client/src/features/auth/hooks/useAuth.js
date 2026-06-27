import { useContext } from "react";
import { login, register } from "../services/auth.api.js";
import { UserContext } from "../context/AuthContext.jsx";

export const useAuth = () => {
  const context = useContext(UserContext);
  const { user, setUser, loading, setLoading, errors, setErrors } = context;

  const handleLogin = async(userName, password) =>{
    setLoading(true);

    const response = await login(userName, password);

    setUser(response.user);

    setLoading(false);
  }

  async function handleRegister(userName, fullName, email, password) {
    setLoading(true);

    const response = await register(userName, fullName, email, password);

    setUser(response.user);

    setLoading(false);
  }

  return (user, loading, handleLogin, handleRegister);
};
