import LoginForm from "../features/auth/LoginForm";
import RegisterButton from "../features/auth/RegisterButton";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between px-4 py-3 bg-orange-900">
        <div className=" text-white text-3xl font-semibold">Logistics</div>
        <div className=" flex gap-4">
          <div className="p-2 text-white cursor-pointer">Help</div>
          <div>
            <Link to="/register">
              <RegisterButton />
            </Link>
          </div>
        </div>
      </div>
      <div className=" bg-orange-100 flex flex-1 justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-orange-900 p-10 rounded-md gap-4">
          <div className="text-white text-4xl">Login</div>
          <LoginForm />
          <button className="bg-gray-300 p-2 rounded-md font-semibold w-36">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
