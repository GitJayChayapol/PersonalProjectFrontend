import { useEffect, useState } from "react";
import CustomerList from "../features/customer/CustomerList";
import HeadTableCustomer from "../features/customer/HeadTableCustomer";
import SearchCustomer from "../features/customer/SearchCustomer";
import axios from "axios";

export default function Customerpage() {
  const [allCustomer, setAllCustomer] = useState([]);

  useEffect(() => {
    restate();
  }, []);

  const restate = async () => {
    const res = await axios
      .get("/customer")
      .then((res) => setAllCustomer(res.data.getcustomer))
      .catch((err) => console.log(err));
    return res;
  };

  const createCustomer = async (input) => {
    try {
      const customer = await axios.post("/customer/createcustomer", input);
      setAllCustomer([...allCustomer, customer.data.datacustomer]);
      restate();
    } catch (err) {
      console.log(err);
    }
  };

  const editCustomer = async (customerId, input) => {
    try {
      await axios.put(`/customer/update/${customerId}`, input);
      restate();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCustomer = async (customerId) => {
    try {
      await axios.delete(`/customer/delete/${customerId}`);
      setAllCustomer(allCustomer.filter((el) => el.id != customerId));
    } catch (err) {
      console.log(err);
    }
  };

  const searchCustomerCall = async (customerCall) => {
    try {
      await axios.get(`/customer/${customerCall}`).then((res) => {
        setAllCustomer(res.data.getcustomerById);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-full">
      <div className="flex flex-col p-5 px-5 gap-5">
        <SearchCustomer
          createCustomer={createCustomer}
          searchCustomerCall={searchCustomerCall}
          restate={restate}
        />
        <div>
          <HeadTableCustomer />
          <CustomerList
            allCustomer={allCustomer}
            editCustomer={editCustomer}
            deleteCustomer={deleteCustomer}
          />
        </div>
      </div>
    </div>
  );
}
