import { Link } from "react-router-dom";
import { useAuth } from "../hook/use-auth";

export default function Header() {
  const { logout } = useAuth();
  return (
    <div>
      <div className="flex justify-between px-4 py-3 bg-orange-900">
        <Link to="">
          <div className=" text-white text-3xl font-semibold">Logistics</div>
        </Link>
        <div className=" flex gap-4">
          <Link to="">
            <div className="p-2 text-white cursor-pointer">Home</div>
          </Link>
          <Link to="car">
            <div className="p-2 text-white cursor-pointer">Car</div>
          </Link>
          <Link to="customer">
            <div className="p-2 text-white cursor-pointer">Customer</div>
          </Link>
          <Link to="driver">
            <div className="p-2 text-white cursor-pointer">Driver</div>
          </Link>
          <Link to="account">
            <div className="p-2 text-white cursor-pointer">Account</div>
          </Link>
          <div>
            <div
              className="bg-gray-300 p-2 cursor-pointer rounded-md font-bold"
              onClick={() => logout()}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
