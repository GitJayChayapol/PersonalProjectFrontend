import CreateDriverForm from "./CreateDriverFrom";

export default function ModalCar({ open, onClose, setopen, createDriver }) {
  return (
    <>
      {open && (
        <>
          <div className=" bg-gray-100 fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
            <div className="flex flex-col justify-center items-center bg-gray-400 p-10 rounded-2xl ">
              <div className="text-4xl font-bold flex justify-start w-full">
                Create Car
              </div>
              <div className="flex flex-col justify-center items-center p-10 rounded-md gap-4 ">
                <CreateDriverForm
                  onClose={onClose}
                  setopen={setopen}
                  createDriver={createDriver}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
