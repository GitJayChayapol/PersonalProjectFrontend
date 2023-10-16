import { Link } from "react-router-dom";
import RegisterForm from "../features/auth/RegisterFrom";
export default function RegisterPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between px-4 py-3 bg-orange-900">
        <div className=" text-white text-3xl font-semibold">Logistics</div>
        <div className=" flex gap-4">
          <div className="p-2 text-white cursor-pointer">Help</div>
          <div className="bg-gray-300 p-2 cursor-pointer rounded-md font-bold">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <div className=" bg-orange-100 flex flex-1 justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-orange-900 p-10 rounded-md gap-4">
          <div className="text-white text-4xl">REGISTES</div>
          <RegisterForm />
          <button className="bg-gray-300 p-2 rounded-md font-semibold w-36">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
