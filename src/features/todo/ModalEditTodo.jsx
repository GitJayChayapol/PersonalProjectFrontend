import EditTodoForm from "./EditTodoForm";

export default function ModalEditTodo({
  open,
  onClose,
  deleteTodo,
  postObj,
  setopen,
  editTodo,
  driverNames,
  carCalls,
  customerNames,
}) {
  const handleClickDelete = () => {
    deleteTodo(postObj.id);
  };
  return (
    <>
      {open && (
        <>
          <div className=" bg-gray-100 fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="flex flex-col justify-center items-center bg-gray-400 p-10 rounded-2xl ">
              <div className=" flex justify-between w-full">
                <div className=" text-4xl font-bold">Edit Driver</div>
                <div
                  className="bg-red-500 p-2 flex justify-center items-center rounded-md font-semibold w-36 text-white shadow-lg cursor-pointer ml-10"
                  onClick={handleClickDelete}
                >
                  Delete
                </div>
              </div>
              <div className="flex flex-col justify-center items-center p-10 rounded-md gap-4 ">
                <EditTodoForm
                  onClose={onClose}
                  setopen={setopen}
                  postObj={postObj}
                  editTodo={editTodo}
                  driverNames={driverNames}
                  carCalls={carCalls}
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
