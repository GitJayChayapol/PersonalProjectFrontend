import { Navigate } from "react-router-dom";
import { useAuth } from "../../hook/use-auth";

export default function Authenticated({ children }) {
  const { authUser, initialLoading } = useAuth();
  if (initialLoading) {
    return <div>Loading...</div>;
  }
  if (!authUser) {
    return <Navigate to="/login" />;
  }
  return children;
}
