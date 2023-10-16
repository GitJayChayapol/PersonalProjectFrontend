import RegisterInput from "./RegisterInput";

export default function RegisterForm() {
  return (
    <form className="grid grid-cols-2 gap-4 ">
      <div>
        <span className="text-white">First Name :</span>
        <RegisterInput placeholder="First Name" />
      </div>
      <div>
        <span className="text-white">Last Name :</span>
        <RegisterInput placeholder="Last Name" />
      </div>
      <div>
        <span className="text-white">Username :</span>
        <RegisterInput placeholder="User Name" />
      </div>
      <div>
        <span className="text-white">Password :</span>
        <RegisterInput placeholder="Password" type="password" />
      </div>
      <div>
        <span className="text-white">Phonenumber :</span>
        <RegisterInput placeholder="PhomeNumber" />
      </div>
      <div>
        <span className="text-white">Confrim Password :</span>
        <RegisterInput placeholder="Confrim Password" type="password" />
      </div>
    </form>
  );
}
