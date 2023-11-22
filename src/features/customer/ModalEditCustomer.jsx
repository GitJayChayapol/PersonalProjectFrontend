import EditCustomerForm from "./EditCustomerForm";

export default function ModalEditCustomer({
  open,
  onClose,
  editCustomer,
  customerObj,
  setopen,
  deleteCustomer,
}) {
  const handleClickDelete = () => {
    deleteCustomer(customerObj.id);
  };
  return (
    <>
      {open && (
        <>
          <div className=" bg-gray-100 fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="flex flex-col justify-center items-center bg-gray-400 p-10 rounded-2xl ">
              <div className=" flex justify-between w-full">
                <div className=" text-4xl font-bold">Edit Customer</div>
                <div
                  className="bg-red-500 p-2 flex justify-center rounded-md font-semibold w-36 text-white shadow cursor-pointer ml-10"
                  onClick={handleClickDelete}
                >
                  Delete
                </div>
              </div>
              <div className="flex flex-col justify-center items-center p-10 rounded-md gap-4 ">
                <EditCustomerForm
                  editCustomer={editCustomer}
                  onClose={onClose}
                  customerObj={customerObj}
                  setopen={setopen}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
