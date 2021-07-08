import React, { useState } from "react";
import Actions from "./Actions";
export default function Property({ p, handleDelete, handleEdit }) {
  const [property, setProperty] = useState(p);
  const [isEditable, setIsEditable] = useState(false);
  function handleEditProperty() {
    setIsEditable(!isEditable);
  }
  let editableName;
  let editableLocation;
  let editablePrice;
  let editableStatus;
  if (isEditable) {
    editableName = <th>edit </th>;
    editableLocation = <th>edit </th>;
    editablePrice = <th>edit </th>;
    editableStatus = <th>edit </th>;
  } else {
    editableName = <th>{property.name}</th>;
    editableLocation = <th>{property.location}</th>;
    editablePrice = <th>{property.price}</th>;
    editableStatus = <th>{property.status}</th>;
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
        />
      </td>
    </tr>
  );
}
