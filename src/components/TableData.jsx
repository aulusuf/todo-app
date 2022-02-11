import React from "react";
function TableData0(props) {
  const modal = (data) => {
    props.setData(data);
  };
  return (
    <tbody>
      {props.data
        .filter((todo) => {
          return todo.status === 0;
        })
        .map((list) => {
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
                    onClick={() => modal(list)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#confDelete"
                    onClick={() => modal(list)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}
function TableData1(props) {
  const modal = (data) => {
    props.setData(data);
  };
  return (
    <tbody>
      {props.data
        .filter((todo) => {
          return todo.status === 1;
        })
        .map((list) => {
          return (
            <tr key={list.id}>
              <th scope="row">{list.id}</th>
              <td>{list.title}</td>
              <td>{list.status === 1 ? "Done" : null}</td>
              <td>
                <div>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#viewTodo"
                    onClick={() => modal(list)}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-warning mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#editTodo"
                    onClick={() => modal(list)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}

export { TableData0, TableData1 };
