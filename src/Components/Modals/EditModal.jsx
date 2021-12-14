import React from "react";

export default function EditModal(props) {
  return (
    <div
      className="modal fade"
      id="editTodo"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-blue" id="">
              View To Do
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="todoTitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="todoTitle"
                  value={props.data.title || ""}
                  onChange={(event) =>
                    props.setData({
                      ...props.data,
                      title: event.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="todoDesc" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="todoTitle"
                  value={props.data.description || ""}
                  onChange={(event) =>
                    props.setData({
                      ...props.data,
                      description: event.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="todoCreDate" className="form-label">
                  Created At
                </label>
                <p>{props.data.createdAt}</p>
              </div>
              <div className="modal-footer">
                {props.data.status === 0 ? (
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Delete
                  </button>
                ) : null}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={props.edit}
                >
                  Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
