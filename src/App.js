import React, { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState([]);
  const [todoTittle, setTodoTittle] = useState([]);
  const [editTodo, setEditTodo] = useState();

  // const [todo0, setTodo0] = useState([]);

  useEffect(() => {
    axios
      .get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list", {
        mode: "cors",
      })
      .then((res) => {
        setTodoList(res.data);
      });
  });
  var todo0 = todoList.filter((todo) => {
    return todo.status === 0;
  });

  var todo1 = todoList.filter((todo) => {
    return todo.status !== 0;
  });

  const createTodo = async () => {};

  const handleLihat = (props) => {
    setSelectedTodo(props);
    console.log(props);
  };

  function
  const handleEdit = () => {
    const found = todoList.find(() => selectedTodo.id === todoList.id);
    console.log(found);
    // setTodoList(
    //   todoList.map((list) =>
    //     list.id === item.id ? { ...list, title: editTodo } : list
    //   )
    // );
    // let newValue = { ...todoList, title: editTodo };
    // setTodoList(newValue);
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
                  <input
                    type="text"
                    class="form-control"
                    id="todoTittle"
                    defaultValue={todoTittle}
                    onChange={(event) => setEditTodo(event.target.value)}
                  />
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
                onClick={() => handleEdit()}
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center mt-3">To Do App</h1>
        <div className="flex justify-content-center">
          <input placeholder="new todo" className="col-3" />
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={(event) => setNewTodo(event.target.value)}
          >
            Add New
          </button>
        </div>
        <div className="text-center"></div>
        <div class="flex">
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" className="col-2">
                    #
                  </th>
                  <th scope="col" className="col-5">
                    Tittle
                  </th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {todo0.map((list) => {
                  return (
                    <tr key={list.id}>
                      <th scope="row">{list.id}</th>
                      <td>{list.title}</td>
                      <td>{list.status === 0 ? "Not Done" : null}</td>
                      <td>
                        <div>
                          <button
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#viewTodo"
                            onClick={() => handleLihat(list)}
                          >
                            View
                          </button>
                          <button className="btn btn-danger mx-2">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" className="col-2">
                    #
                  </th>
                  <th scope="col" className="col-5">
                    Tittle
                  </th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {todo1.map((list) => {
                  return (
                    <tr key={list.id}>
                      <th scope="row">{list.id}</th>
                      <td>{list.title}</td>
                      <td>{list.status === 1 ? "Done" : null}</td>
                      <td>
                        <div>
                          <button className="btn btn-primary">View</button>
                          <button className="btn btn-warning mx-2">Edit</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
