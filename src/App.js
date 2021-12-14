import React, { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState([]);

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
        <div className="flex justify-content-center">
          <input placeholder="new todo" className="col-3" />
          <button type="button" className="btn btn-primary mx-2">
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
              <tbody>{/* Table data with status 0 */}</tbody>
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
              <tbody>{/* Table Data with status 1 */}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
