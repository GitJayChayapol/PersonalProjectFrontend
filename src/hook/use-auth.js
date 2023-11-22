import { useContext } from "react";
import { Authcontext } from "../context/Authcontext.jsx";

export function useAuth() {
  return useContext(Authcontext);
}
