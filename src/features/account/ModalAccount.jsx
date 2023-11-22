import CreateAccountForm from "./CreateAccountForm";

export default function ModalCar({
  accopen,
  onaccClose,
  setaccopen,
  createAccount,
  allTodo,
  price,
}) {
  return (
    <>
      {accopen && (
        <>
          <div className=" bg-gray-100 fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="flex flex-col justify-center items-center bg-gray-400 p-10 rounded-2xl ">
              <div className="text-4xl font-bold flex justify-start w-full">
                Create Account
              </div>
              <div className="flex flex-col justify-center items-center p-10 rounded-md gap-4 ">
                <CreateAccountForm
                  onaccClose={onaccClose}
                  setaccopen={setaccopen}
                  createAccount={createAccount}
                  allTodo={allTodo}
                  price={price}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
