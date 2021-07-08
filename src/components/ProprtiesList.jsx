import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import Actions from "./Actions";
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
            <tr key={property.id}>
              <th>{property.id}</th>
              <th>{property.name}</th>
              <td>{property.location}</td>
              <td>{property.price}</td>
              <td>{property.status}</td>
              <td>{property.date}</td>
              <td>
                <Actions
                  id={property.id}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
