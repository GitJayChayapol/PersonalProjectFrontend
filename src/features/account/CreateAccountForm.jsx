import { useEffect, useState } from "react";
import InputErrorMessage from "../auth/InputErrorMessage";
import AccountInput from "./AccountInput";
import { useNavigate } from "react-router-dom";

export default function CreateAccountForm({
  onaccClose,
  setaccopen,
  createAccount,
  allTodo,
  price,
}) {
  const [error, setError] = useState({});
  const [input, setInput] = useState([allTodo]);
  console.log(price);
  console.log(price[0].totalprice);
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await createAccount(input);

    const { error } = input;
    if (error) {
      return setError(error);
    }
    setaccopen(false);
    navigate("/account");
  };
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setInput({ ...input, totalPrice: price[0].totalprice });
  }, []);

  console.log(allTodo);
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <span>Invoice :</span>
          <AccountInput
            value={input.invoice}
            onChange={handleChangeInput}
            name="invoice"
            hasError={error.invoice}
            placeholder="invoice"
          />
          {error.date && <InputErrorMessage message={error.date} />}
        </div>

        <div>
          <span>Cut-off Date :</span>
          <AccountInput
            value={input.billing}
            onChange={handleChangeInput}
            name="billing"
            hasError={error.billing}
            placeholder="รอบวางบิล"
          />
          {error.origin && <InputErrorMessage message={error.origin} />}
        </div>

        <div className="invalid:">
          <span>TotalPrice :</span>
          <AccountInput
            value={price[0].totalprice}
            name="totalPrice"
            hasError={error.totalPrice}
          />
          {error.date && <InputErrorMessage message={error.date} />}
        </div>
      </div>
      <div className="flex justify-end gap-3 w-full pt-2">
        <button className="bg-green-600 p-2 rounded-md font-semibold w-36 text-white shadow-lg">
          Create
        </button>
        <button
          className="bg-red-500 p-2 rounded-md font-semibold w-36 text-white shadow-lg"
          type="button"
          onClick={onaccClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
