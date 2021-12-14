import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import ViewDetailModal from "./Components/Modals/ViewDetailModal";
import ConfirmationModal from "./Components/Modals/ConfirmationModal";
import EditModal from "./Components/Modals/EditModal";
import { TableData0, TableData1 } from "./Components/TableData";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodoT, setNewTodoT] = useState();
  const [newTodoD, setNewTodoD] = useState();
  const [selectedTodo, setSelectedTodo] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const createTodo = async (event) => {
    event.preventDefault();
    const now = new Date();
    const dateString = moment(now).format("YYYY-MM-DD HH:mm");
    const temp = [];
    let data = {
      id: todoList.length + 1,
      title: newTodoT,
      description: newTodoD,
      status: 0,
      createdAt: dateString,
    };
    temp.push(...todoList, data); // seems like api. duplicate first
    setTodoList(temp);
  };

  const editTodo = (e) => {
    e.preventDefault();
    console.log(selectedTodo);
    const temp = todoList.map((data) =>
      data.id === selectedTodo.id
        ? {
            ...data,
            title: selectedTodo.title,
            description: selectedTodo.description,
            status: 0,
          }
        : data
    );
    setTodoList(temp);
    // console.log(temp);
  };

  const deleteTodo = (e) => {
    let temp = [];
    e.preventDefault();
    let todoIndex = todoList.findIndex((data) => data.id === selectedTodo.id);
    console.log(todoIndex);
    todoList.splice(todoIndex, 1);
    temp.push(...todoList);
    setTodoList(temp);
  };

  const doneTodo = (e) => {
    e.preventDefault();
    console.log(selectedTodo);
    const temp = todoList.map((data) =>
      data.id === selectedTodo.id
        ? {
            ...data,
            status: 1,
          }
        : data
    );
    setTodoList(temp);
  };

  return (
    <>
      <ViewDetailModal
        data={selectedTodo}
        setData={setSelectedTodo}
        done={(e) => doneTodo(e)}
        edit={(e) => editTodo(e)}
        delete={(e) => deleteTodo(e)}
      />
      <ConfirmationModal delete={(e) => deleteTodo(e)} />
      <EditModal
        data={selectedTodo}
        setData={setSelectedTodo}
        edit={(e) => editTodo(e)}
      />
      <div className="container">
        <h1 className="text-center mt-3">To Do App</h1>
        <div className="text-center">
          <p>New To Do</p>
          <div className="mb-3">
            <input
              placeholder="Tittle"
              className="col-3 mb-3 p-1"
              onChange={(event) => setNewTodoT(event.target.value)}
            />
            <div className="mb-3">
              <input
                placeholder="Description"
                className="col-3 p-1"
                onChange={(event) => setNewTodoD(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(event) => createTodo(event)}
              >
                Add New
              </button>
            </div>
          </div>
        </div>
        <div class="flex">
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="col-2">
                    #
                  </th>
                  <th scope="col" className="col-5">
                    Title
                  </th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <TableData0 data={todoList} setData={setSelectedTodo} />
            </table>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="col-2">
                    #
                  </th>
                  <th scope="col" className="col-5">
                    Title
                  </th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <TableData1 data={todoList} setData={setSelectedTodo} />
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
