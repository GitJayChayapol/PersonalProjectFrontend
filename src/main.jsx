import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";
import AuthcontextProvider from "./context/Authcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthcontextProvider>
    <App />
  </AuthcontextProvider>
);
