import Customeritem from "./Customeritem";

export default function CustomerList({
  allCustomer,
  editCustomer,
  deleteCustomer,
}) {
  return (
    <div>
      {allCustomer.map((el) => (
        <Customeritem
          key={el.id}
          customerObj={el}
          editCustomer={editCustomer}
          deleteCustomer={deleteCustomer}
        />
      ))}
    </div>
  );
}
