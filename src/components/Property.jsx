import React, { useState } from "react";
import Actions from "./Actions";
import Select from "react-select";
import cities from "../static/cities";
import * as yup from "yup";

export default function Property({ p, handleDelete, handleEdit }) {
  const [property, setProperty] = useState(p);
  const [isEditable, setIsEditable] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    price: "",
    status: "",
    location: "",
  });

  let schema = yup.object().shape({
    name: yup.string().required(),
    price: yup
      .string()
      .matches(/^\d+£$/, "please enter a valid price followed by £"),
    location: yup.string().required(),
    status: yup.string().required(),
  });
  function handleEditProperty() {
    setIsEditable(true);
  }
  function handleSaveProperty() {
    if (isEditable) {
      schema
        .validate(property, { abortEarly: false })
        .then((x) => {
          console.log("done");
          handleEdit(p.id, property);
          setIsEditable(false);
        })
        .catch((err) => {
          let nErrors = {
            name: "",
            price: "",
            status: "",
            location: "",
          };
          err.inner.forEach((error) => {
            nErrors[error.path] = error.message;
          });
          console.log(nErrors);
          setErrors((prev) => ({ ...nErrors }));
        });
    }
  }
  const handleInputChange = (e) => {
    setProperty((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setProperty(p);
    setIsEditable(false);
  };

  const handleCityChange = (selectedOption) => {
    setProperty((prev) => ({
      ...prev,
      location: selectedOption.value,
    }));
  };
  const handleStatusChange = (selectedOption) => {
    setProperty((prev) => ({
      ...prev,
      status: selectedOption.value,
    }));
  };
  let editableName;
  let editableLocation;
  let editablePrice;
  let editableStatus;
  if (isEditable) {
    editableName = (
      <th>
        <div className="edit-input">
          <input
            name="name"
            id="name"
            type="text"
            className="form-control"
            value={property.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <div className="alert alert-danger edit-alert">Required</div>
          )}
        </div>
      </th>
    );
    editableLocation = (
      <th>
        <div className="edit-select">
          <Select
            options={cities}
            isSearchable={true}
            onChange={handleCityChange}
          />
        </div>
        {errors.location && (
          <div className="alert alert-danger edit-alert">Required</div>
        )}
      </th>
    );
    editablePrice = (
      <th>
        <div className="edit-input">
          <input
            name="price"
            id="price"
            type="text"
            className="form-control "
            value={property.price}
            onChange={handleInputChange}
          />
          {errors.price && (
            <div className="alert alert-danger edit-alert">Not Valid</div>
          )}
        </div>
      </th>
    );
    editableStatus = (
      <th>
        <div className="edit-input">
          <Select
            options={[
              { value: "sold", label: "sold" },
              { value: "unsold", label: "unsold" },
            ]}
            isSearchable={true}
            onChange={handleStatusChange}
          />
          {errors.status && (
            <div className="alert alert-danger edit-alert">Required</div>
          )}
        </div>
      </th>
    );
  } else {
    editableName = <th>{p.name}</th>;
    editableLocation = <th>{p.location}</th>;
    editablePrice = <th>{p.price}</th>;
    editableStatus = <th>{p.status}</th>;
  }

  return (
    <tr>
      <th>{property.id}</th>
      {editableName}
      {editableLocation}
      {editablePrice}
      {editableStatus}
      <td>{property.date}</td>
      <td>
        <Actions
          id={property.id}
          handleDelete={handleDelete}
          handleEdit={handleEditProperty}
          handleCancel={handleCancel}
          handleSave={handleSaveProperty}
          isEditable={isEditable}
        />
      </td>
    </tr>
  );
}
