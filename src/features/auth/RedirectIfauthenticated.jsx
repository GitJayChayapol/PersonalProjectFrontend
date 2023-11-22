import { Navigate } from "react-router-dom";
import { useAuth } from "../../hook/use-auth";

export default function RedirectIfauthenticated({ children }) {
  const { authUser } = useAuth();
  if (authUser) {
    return <Navigate to="/" />;
  }
  return children;
}
