import { ToastContainer } from "react-toastify";
import Loading from "./component/Loading";
import Route from "./features/router/Route";
import { useAuth } from "./hook/use-auth";

function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading />;
  }
  return (
    <>
      <Route />
      <ToastContainer
        position="bottom-center"
        autoclose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;
