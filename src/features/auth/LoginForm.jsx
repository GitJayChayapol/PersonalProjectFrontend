import { useState } from "react";
import LoginInput from "./LoginInput";
import { toast } from "react-toastify";
import { useAuth } from "../../hook/use-auth";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch(() => {
      toast.error("Username or Password incorrect");
    });
    toast.success("Login Done");
    navigate("/");
  };
  return (
    <form className="grid gap-4" onSubmit={handleSubmitForm}>
      <LoginInput
        placeholder="Username"
        value={input.username}
        onChange={(e) => setInput({ ...input, username: e.target.value })}
      />
      <LoginInput
        type="password"
        placeholder="password"
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
      />
      <div className="flex justify-center">
        <button className="bg-gray-300 p-2 rounded-md font-semibold w-36">
          Login
        </button>
      </div>
    </form>
  );
}
