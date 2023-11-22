import SearchTodo from "../features/todo/SearchTodo";
import HeadTableTodo from "../features/todo/HeadTableTodo";
import TodoList from "../features/todo/TodoList";
import CreateTodos from "../features/todo/CreateTodos";
import { useEffect, useState } from "react";
import axios from "../config/axios";

export default function Homepage() {
  const [allTodo, setAllTodo] = useState([]);
  const [allCar, setAllCar] = useState([]);
  const [allDriver, setAllDriver] = useState([]);
  const [allCustomer, setAllCustomer] = useState([]);
  const [price, setPrice] = useState("");

  useEffect(() => {
    restateTodo();
  }, []);

  const restateTodo = async () => {
    const res = await axios
      .get("/")
      .then((res) => {
        setAllTodo(res.data.getTodos);
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  };

  const createTodo = async (input) => {
    try {
      const todos = await axios.post("/createtodo", input);
      setAllTodo([...allTodo, todos.data.datatodo]);
      restateTodo();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      await axios.delete(`/delete/${todoId}`);
      setAllTodo(allTodo.filter((el) => el.id != todoId));
    } catch (err) {
      console.log(err);
    }
  };

  const getInvoice = async () => {
    await axios
      .get("/invoice")
      .then((res) => {
        setAllTodo(res.data.getinvoice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const notinvoice = async () => {
    await axios
      .get("/notinvoice")
      .then((res) => {
        setAllTodo(res.data.getinvoice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchTodo = async (id) => {
    try {
      await axios.get(`/${id}`).then((res) => {
        setAllTodo(res.data.searchtodo);
        setPrice(res.data.totalPrice);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = async (todoId, input) => {
    try {
      await axios.put(`/update/${todoId}`, input);
      restateTodo();
    } catch (err) {
      console.log(err);
    }
  };

  const carCalls = [];
  allCar.forEach((carItem) => {
    const carCall = { id: carItem.id, name: carItem.carRegistration };
    if (!carCalls.includes(carCall)) {
      carCalls.push(carCall);
    }
  });

  useEffect(() => {
    restate();
  }, []);

  const restate = async () => {
    const res = await axios
      .get("./car")
      .then((res) => {
        setAllCar(res.data.getcar);
      })
      .catch((err) => {
        console.log(err);
      });
    return res;
  };

  const driverNames = [];
  allDriver.forEach((driveritem) => {
    const driverName = { id: driveritem.id, name: driveritem.driverCall };

    if (!driverNames.includes(driverName)) {
      driverNames.push(driverName);
    }
  });

  useEffect(() => {
    restateDriver();
  }, []);

  const restateDriver = async () => {
    const res = await axios
      .get("/driver")
      .then((res) => setAllDriver(res.data.getAlldriver))
      .catch((err) => console.log(err));
    return res;
  };

  const customerNames = [];
  allCustomer.forEach((customerItem) => {
    const customerName = {
      id: customerItem.id,
      name: customerItem.customerCall,
    };
    if (!customerNames.includes(customerName)) {
      customerNames.push(customerName);
    }
  });

  useEffect(() => {
    restateCustomer();
  }, []);

  const restateCustomer = async () => {
    const res = await axios
      .get("/customer")
      .then((res) => setAllCustomer(res.data.getcustomer))
      .catch((err) => console.log(err));
    return res;
  };

  const [allAcc, setAllAcc] = useState([]);

  useEffect(() => {
    restateAcc();
  }, []);

  const restateAcc = async () => {
    const res = await axios
      .get("/account")
      .then((res) => setAllAcc(res.data.getacc))
      .catch((err) => console.log(err));
    return res;
  };
  const createAccount = async (input) => {
    try {
      const acc = await axios.post("/account/createaccount", input);
      setAllAcc([allAcc, acc.data.createAccount]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (input) => {
    try {
      try {
        await axios.patch(`/status/${input}`);
        restateTodo();
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" h-full">
      <div className=" flex flex-col p-5 px-5 gap-2">
        <CreateTodos
          createTodo={createTodo}
          carCalls={carCalls}
          driverNames={driverNames}
          customerNames={customerNames}
          createAccount={createAccount}
          price={price}
          allTodo={allTodo}
        />
        <SearchTodo
          notinvoice={notinvoice}
          getInvoice={getInvoice}
          restateTodo={restateTodo}
          searchTodo={searchTodo}
          customerNames={customerNames}
        />
      </div>
      <div className="flex flex-col flex-1 pb-8">
        <HeadTableTodo />
        <TodoList
          allTodo={allTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          driverNames={driverNames}
          carCalls={carCalls}
          customerNames={customerNames}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
}
