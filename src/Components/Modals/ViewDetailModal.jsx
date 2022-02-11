import React from "react";

export default function ViewDetailModal(props) {
  return (
    <div
      className="modal fade"
      id="viewTodo"
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
              {props.data.status === 0 ? (
                <>
                  <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="todoTitle"
                      value={props.data.title}
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
                      value={props.data.description}
                      onChange={(event) =>
                        props.setData({
                          ...props.data,
                          description: event.target.value,
                        })
                      }
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <p>Title</p>
                    <p className="fw-bold">{props.data.title}</p>
                  </div>
                  <div className="mb-3">
                    <p>Description</p>
                    <p className="fw-bold">{props.data.description}</p>
                  </div>
                </>
              )}
              <div className="mb-3">
                <label htmlFor="todoCreDate" className="form-label">
                  Created At
                </label>
                <p>{props.data.createdAt}</p>
              </div>
              {props.data.status === 0 ? (
                <div className="modal-footer">
                  <>
                    <button
                      type="button"
                      className="btn btn-success ml-auto"
                      data-bs-dismiss="modal"
                      onClick={props.done}
                    >
                      Done
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                      onClick={props.delete}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={props.edit}
                    >
                      Change
                    </button>
                  </>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
