import React from "react";

export default function Actions({
  handleDelete,
  handleEdit,
  handleCancel,
  handleSave,
  isEditable,
  id,
}) {
  let btn1, btn2;
  if (isEditable) {
    btn1 = (
      <button
        onClick={() => {
          handleSave(id);
        }}
        className="btn btn-info btn-sm "
      >
        SAVE
      </button>
    );
    btn2 = (
      <button
        onClick={() => {
          handleCancel(id);
        }}
        className="btn btn-warning btn-sm"
      >
        CANCEL
      </button>
    );
  } else {
    btn1 = (
      <button
        onClick={() => {
          handleEdit();
        }}
        className="btn btn-light btn-sm "
      >
        EDIT
      </button>
    );
    btn2 = (
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className="btn btn-danger btn-sm"
      >
        DELETE
      </button>
    );
  }
  return (
    <div>
      <div className="btn-group " role="group">
        {btn1}
        {btn2}
      </div>
    </div>
  );
}
