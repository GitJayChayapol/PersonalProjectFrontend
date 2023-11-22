import RegisterInput from "./RegisterInput";
import Joi from "joi";
import { toast } from "react-toastify";
import { useAuth } from "../../hook/use-auth";
import { useState } from "react";
import InputErrorMessage from "./InputErrorMessage";
import { useNavigate } from "react-router-dom";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  username: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  phoneNumber: Joi.string().trim().required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .trim()
    .required()
    .strip(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const { register } = useAuth();

  const navigate = useNavigate();

  const handdleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handdleSubmitForm = (e) => {
    e.preventDefault();
    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    register(input).catch((err) => {
      toast.error(err.response?.data.message);
    });
    toast.success("Register Done");
    navigate("/login");
  };
  return (
    <form className="flex flex-col gap-4 " onSubmit={handdleSubmitForm}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <span className="text-white">First Name :</span>
          <RegisterInput
            value={input.firstName}
            onChange={handdleChangeInput}
            name="firstName"
            hasError={error.firstName}
            placeholder="First Name"
          />
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div>
          <span className="text-white">Last Name :</span>
          <RegisterInput
            value={input.lastName}
            onChange={handdleChangeInput}
            name="lastName"
            hasError={error.lastName}
            placeholder="Last Name"
          />
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>
        <div>
          <span className="text-white">Username :</span>
          <RegisterInput
            value={input.username}
            onChange={handdleChangeInput}
            name="username"
            hasError={error.username}
            placeholder="username"
          />
          {error.username && <InputErrorMessage message={error.username} />}
        </div>
        <div>
          <span className="text-white">Password :</span>
          <RegisterInput
            value={input.password}
            onChange={handdleChangeInput}
            name="password"
            hasError={error.password}
            placeholder="Password"
            type="password"
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
        <div>
          <span className="text-white">Phonenumber :</span>
          <RegisterInput
            value={input.phoneNumber}
            onChange={handdleChangeInput}
            name="phoneNumber"
            hasError={error.phoneNumber}
            placeholder="PhomeNumber"
          />
          {error.phoneNumber && (
            <InputErrorMessage message={error.phoneNumber} />
          )}
        </div>
        <div>
          <span className="text-white">Confrim Password :</span>
          <RegisterInput
            value={input.confirmPassword}
            onChange={handdleChangeInput}
            name="confirmPassword"
            hasError={error.confirmPassword}
            placeholder="Confrim Password"
            type="password"
          />
          {error.confirmPassword && (
            <InputErrorMessage message={error.confirmPassword} />
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <button className=" bg-gray-300 p-2 rounded-md font-semibold w-36">
          Register
        </button>
      </div>
    </form>
  );
}
