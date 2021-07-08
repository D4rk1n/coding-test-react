import React, { useState } from "react";
import Select from "react-select";
import cities from "../static/cities";

export default function NewPropertyForm({ handleAdd }) {
  const [property, setProperty] = useState({
    name: "",
    price: "",
    status: "unsold",
    location: "",
  });
  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(property);
    handleAdd(property);
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
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>

          <Select
            options={cities}
            isSearchable={true}
            onChange={handleCityChange}
          />
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
