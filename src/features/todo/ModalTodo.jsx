import CreateTodoForm from "./CreateTodoForm";

export default function ModalTodo({
  open,
  onClose,
  setopen,
  createTodo,
  carCalls,
  driverNames,
  customerNames,
}) {
  return (
    <>
      {open && (
        <>
          <div className=" bg-gray-100 fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="flex flex-col justify-center items-center bg-gray-400 p-10 rounded-2xl ">
              <div className="text-4xl font-bold flex justify-start w-full">
                Create Work
              </div>
              <div className="flex flex-col justify-center items-center p-10 rounded-md gap-4 ">
                <CreateTodoForm
                  onClose={onClose}
                  setopen={setopen}
                  createTodo={createTodo}
                  carCalls={carCalls}
                  driverNames={driverNames}
                  customerNames={customerNames}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
