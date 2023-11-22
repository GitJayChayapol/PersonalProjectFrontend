import EditDriverForm from "./EditDriverForm";

export default function ModalEditDriver({
  open,
  onClose,
  driverObj,
  editDriver,
  setopen,
  deleteDriver,
}) {
  const handleClickDelete = () => {
    deleteDriver(driverObj.id);
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
                  className="bg-red-500 p-2 flex justify-center rounded-md font-semibold w-36 text-white shadow cursor-pointer ml-10"
                  onClick={handleClickDelete}
                >
                  Delete
                </div>
              </div>
              <div className="flex flex-col justify-center items-center p-10 rounded-md gap-4 ">
                <EditDriverForm
                  editDriver={editDriver}
                  onClose={onClose}
                  setopen={setopen}
                  driverObj={driverObj}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
