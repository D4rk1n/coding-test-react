import React from "react";
import { useHistory } from "react-router-dom";
import Property from "./Property";
export default function ProprtiesList({
  properties,
  handleDelete,
  handleEdit,
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
            <th scope="col" className="text-left">
              ID
            </th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
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
