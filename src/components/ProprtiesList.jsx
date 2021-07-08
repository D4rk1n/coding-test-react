import React from "react";
import { useHistory } from "react-router-dom";
import Property from "./Property";
export default function ProprtiesList({
  properties,
  handleDelete,
  handleEdit,
  handleSort,
}) {
  const history = useHistory();
  return (
    <div className="container">
      <div>
        <button
          className="btn btn-primary m-3"
          onClick={() => history.push("/add")}
        >
          Add a new property
        </button>
      </div>
      <table className="table  mx-auto">
        <thead>
          <tr>
            <th
              id="id"
              scope="col"
              className="text-left"
              onClick={() => handleSort("id")}
            >
              ID
            </th>
            <th id="name" scope="col" onClick={() => handleSort("name")}>
              Name
            </th>
            <th
              id="location"
              scope="col"
              onClick={() => handleSort("location")}
            >
              Location
            </th>
            <th id="price" scope="col" onClick={() => handleSort("price")}>
              Price
            </th>
            <th id="status" scope="col" onClick={() => handleSort("status")}>
              Status
            </th>
            <th id="date" scope="col" onClick={() => handleSort("date")}>
              Date
            </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <Property
              key={property.id}
              p={property}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
