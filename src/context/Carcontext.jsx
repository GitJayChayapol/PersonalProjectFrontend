import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../uitls/local-storane";

export const Authcontext = createContext();

export default function CarcontextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const login = async (credential) => {
    const res = await axios.post("/auth/login", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const register = async (registerInputObject) => {
    const res = await axios.post("/auth/register", registerInputObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <Authcontext.Provider
      value={{
        login,
        authUser,
        initialLoading,
        register,
        logout,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
