import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import cities from "../static/cities";
import * as yup from "yup";

export default function NewPropertyForm({ handleAdd }) {
  const history = useHistory();
  const [property, setProperty] = useState({
    name: "",
    price: "",
    status: "",
    location: "",
  });

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

  const handleSumbit = (e) => {
    e.preventDefault();
    schema
      .validate(property, { abortEarly: false })
      .then((x) => {
        console.log("done");
        handleAdd(property);
        history.push("/");
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
  };
  const handleInputChange = (e) => {
    setProperty((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
  return (
    <div className="container my-5">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            className="form-control"
            value={property.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <div className="alert alert-danger">{errors.name}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            name="price"
            id="price"
            type="text"
            className="form-control"
            value={property.price}
            onChange={handleInputChange}
          />
          {errors.price && (
            <div className="alert alert-danger">{errors.price}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>

          <Select
            options={[
              { value: "sold", label: "sold" },
              { value: "unsold", label: "unsold" },
            ]}
            isSearchable={true}
            onChange={handleStatusChange}
          />
          {errors.status && (
            <div className="alert alert-danger">{errors.status}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>

          <Select
            options={cities}
            isSearchable={true}
            onChange={handleCityChange}
          />
          {errors.location && (
            <div className="alert alert-danger">{errors.location}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSumbit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
