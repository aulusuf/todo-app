import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { TableData0, TableData1 } from "./components/TableData";

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

  return (
    <>
      <div
        class="modal fade"
        id="viewTodo"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-blue" id="">
                View To Do
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="todoTittle" class="form-label">
                    Tittle
                  </label>
                  <input type="text" class="form-control" id="todoTittle" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
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
